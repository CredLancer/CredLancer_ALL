import 'dart:async';
import 'dart:developer';

import 'package:cred_lancer/utils/constants.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:injectable/injectable.dart';
import 'package:url_launcher/url_launcher_string.dart';
import 'package:walletconnect_flutter_v2/walletconnect_flutter_v2.dart';
import 'package:web3dart/crypto.dart';
import 'package:web3dart/web3dart.dart';
import 'package:web_socket_channel/io.dart';

abstract class IWalletRepository {
  Future<void> init();
  bool isSessionConnected();
  Future<Uri> getConnectUri();
  void onSessionConnect(VoidCallback callback);
  void onSessionDisconnect(VoidCallback callback);
  SessionData? getCurrentSession();
  String? getUserAddress();
  String? getChainId();
  Future<dynamic> signMessage(String message);
  Future<String> sendTransaction(Transaction transaction);
  Future<void> launchWalletApp();
  Future<bool> waitForTx(String txHash);
  Future disconnect();
}

@LazySingleton(as: IWalletRepository)
class WalletRepository implements IWalletRepository {
  WalletRepository();

  Web3Client? _web3Client;
  Web3App? _wcClient;
  Uri? _walletUri;

  @override
  Future<void> init() async {
    _web3Client ??=
        Web3Client(WEB3_RPC_URI, http.Client(), socketConnector: () {
      return IOWebSocketChannel.connect(WEB3_RPC_URI_WS).cast<String>();
    });
    _wcClient ??= await Web3App.createInstance(
      relayUrl: 'wss://relay.walletconnect.com',
      projectId: 'b3c3eb1552046c7be6291e17ab2c44db',
      metadata: const PairingMetadata(
        name: 'CredLancer',
        description: 'A dapp that can request that transactions be signed',
        url: 'https://walletconnect.com',
        icons: ['https://avatars.githubusercontent.com/u/37784886'],
      ),
    );
  }

  @override
  bool isSessionConnected() {
    return _wcClient?.getActiveSessions().isNotEmpty ?? false;
  }

  @override
  Future<Uri> getConnectUri() async {
    final resp = await _wcClient?.connect(
      requiredNamespaces: {
        'eip155': const RequiredNamespace(
          chains: ['eip155:280'],
          methods: ['eth_signTransaction', 'eth_sendTransaction', 'eth_sign'],
          events: [],
        ),
      },
    );
    _walletUri = resp?.uri;
    log(_walletUri.toString(), name: 'WC_CONN');
    return _walletUri!;
    // final session = await resp?.session.future;
    // log(session?.toJson().toString() ?? 'session null', name: 'WC_CONN');
  }

  @override
  void onSessionConnect(VoidCallback callback) {
    _wcClient?.onSessionConnect.subscribe((args) {
      callback();
    });
  }

  @override
  void onSessionDisconnect(VoidCallback callback) {
    _wcClient?.onSessionDelete.subscribe((args) {
      callback();
    });
  }

  @override
  SessionData? getCurrentSession() {
    if (_getActiveSessions().isNotEmpty) {
      return _getActiveSessions().first;
    }
    return null;
  }

  List<SessionData> _getActiveSessions() {
    return _wcClient?.getActiveSessions().values.toList() ?? [];
    // return _wcClient?.sessions.getAll() ?? [];
  }

  @override
  String? getUserAddress() {
    if (_getActiveSessions().isNotEmpty) {
      final address = _wcClient
          ?.getActiveSessions()
          .values
          .first
          .namespaces
          .values
          .first
          .accounts
          .first;
      return address?.split(':').last;
    }
    return null;
  }

  @override
  String? getChainId() {
    if (_getActiveSessions().isNotEmpty) {
      final address = _wcClient
          ?.getActiveSessions()
          .values
          .first
          .namespaces
          .values
          .first
          .accounts
          .first;
      return address != null
          ? '${address.split(':')[0]}:${address.split(':')[1]}'
          : null;
    }
    return null;
  }

  @override
  Future<dynamic> signMessage(String message) async {
    final session = getCurrentSession()!;
    final address = getUserAddress()!;
    final chainId = getChainId()!;

    final response = await _wcClient?.request(
      topic: session.topic,
      chainId: chainId,
      request: SessionRequestParams(
        method: 'eth_sign',
        params: [address, message],
      ),
    );
    return response;
  }

  @override
  Future<String> sendTransaction(Transaction transaction) async {
    final session = getCurrentSession()!;
    final address = getUserAddress()!;
    final chainId = getChainId()!;

    debugPrint('''
from: ${address},
to: ${transaction.to},
data: ${bytesToHex(transaction.data!)},
gasPrice: ${bytesToHex(intToBytes(transaction.gasPrice?.getInWei ?? BigInt.zero))},
gasLimit: ${bytesToHex(intToBytes(BigInt.from(transaction.maxGas ?? 0)))},
value: ${bytesToHex(intToBytes(transaction.value?.getInWei ?? BigInt.zero))},
maxFeePerGas: ${bytesToHex(intToBytes(transaction.maxFeePerGas?.getInWei ?? BigInt.zero))},
maxPriorityFeePerGas: ${bytesToHex(intToBytes(transaction.maxPriorityFeePerGas?.getInWei ?? BigInt.zero))},
''');

    final gasPrice = await _web3Client!.getGasPrice();
    debugPrint('GAS_PRICE ${gasPrice.getInWei}');
    // final maxPriorityFeePerGas =
    //     await web3Client.makeRPCCall<dynamic>('eth_maxPriorityFeePerGas', []);
    // debugPrint('maxPriorityFeePerGas ${maxPriorityFeePerGas}');
    // final gasAmount = await web3Client.estimateGas(
    //   sender: EthereumAddress.fromHex(address),
    //   to: transaction.to,
    //   value: transaction.value,
    //   data: transaction.data,
    //   gasPrice: transaction.gasPrice,
    // );
    // debugPrint('GAS_AMOUNT $gasAmount');

    final response = await _wcClient?.request(
      topic: session.topic,
      chainId: chainId,
      request: SessionRequestParams(
        method: 'eth_signTransaction',
        params: [
          {
            'from': address,
            'to': transaction.to.toString(),
            'data': bytesToHex(transaction.data!),
            'gasPrice': bytesToHex(intToBytes(gasPrice.getInWei)),
            'gasLimit': bytesToHex(intToBytes(BigInt.from(200000))),
            'value': bytesToHex(
                intToBytes(transaction.value?.getInWei ?? BigInt.zero)),
          },
        ],
      ),
    );
    debugPrint('SIGNTX_RES: $response');
    final txHash = await _web3Client!.sendRawTransaction(hexToBytes(response));
    return txHash;
  }

  @override
  Future<void> launchWalletApp() async {
    final appUrl = getCurrentSession()?.peer.metadata.redirect?.native;
    await launchUrlString(appUrl ?? 'wc:');
  }

  @override
  Future<bool> waitForTx(String txHash) async {
    final StreamSubscription streamSubscription =
        _web3Client!.addedBlocks().listen(null);
    final completer = Completer<bool>();
    streamSubscription.onData((data) async {
      final txReceipt = await _web3Client!.getTransactionReceipt(txHash);
      debugPrint('TX_RECEIPT $txReceipt');
      if (txReceipt != null) {
        debugPrint('TX_RECEIPT_MATCH status ${txReceipt.status}');
        streamSubscription.cancel();
        completer.complete(txReceipt.status ?? false);
      }
    });
    return completer.future;
  }

  @override
  Future disconnect() {
    final session = getCurrentSession()!;
    return _wcClient!.disconnectSession(
        topic: session.topic,
        reason: WalletConnectError(
          code: 99999,
          message: '',
        ));
  }
}
