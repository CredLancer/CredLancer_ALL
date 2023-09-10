import 'dart:developer';

import 'package:cred_lancer/abis/organization_controller.g.dart';
import 'package:cred_lancer/models/lancer.dart';
import 'package:cred_lancer/models/lancer_params.dart';
import 'package:cred_lancer/models/org_params.dart';
import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/repositories/lancer_repository.dart';
import 'package:cred_lancer/repositories/organization_repository.dart';
import 'package:cred_lancer/repositories/wallet_repository.dart';
import 'package:cred_lancer/utils/constants.dart';
import 'package:dartz/dartz.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:http/http.dart' as http;
import 'package:injectable/injectable.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:web3dart/crypto.dart';
import 'package:web3dart/web3dart.dart';

part 'sign_up_cubit.freezed.dart';
part 'sign_up_state.dart';

@lazySingleton
class SignUpCubit extends Cubit<SignUpState> {
  SignUpCubit(
    this._walletRepository,
    this._organizationRepository,
    this._lancerRepository,
  ) : super(SignUpState.initial());

  final IWalletRepository _walletRepository;
  final IOrganizationRepository _organizationRepository;
  final ILancerRepository _lancerRepository;

  void connectWallet() async {
    emit(state.copyWith(isWalletConnected: false, connectLoading: true));

    _walletRepository.onSessionConnect(() async {
      final userType = await getUserType();
      emit(state.copyWith(userType: userType));
      emit(state.copyWith(isWalletConnected: true));
    });

    _walletRepository.onSessionDisconnect(() async {
      emit(state.copyWith(
        isWalletConnected: false,
        userType: const UserType.none(),
      ));
    });

    final connUri = await _walletRepository.getConnectUri();
    launchUrl(connUri);
  }

  void updateWallet() async {
    emit(state.copyWith(isWalletConnected: true));
  }

  void singUpOrg({
    required String name,
    required String description,
    required String email,
    required String country,
    required String imagePath,
  }) async {
    emit(state.copyWith(
      signUpLoading: true,
      signUpOption: none(),
      openWalletOption: none(),
    ));

    try {
      final address = _walletRepository.getUserAddress()!;
      final org = await _organizationRepository.createOrganizationProfile(
          params: OrgParams(
        name: name,
        admin: address,
        description: description,
        email: email,
        signature: '',
        filePath: imagePath,
      ));
      log(org?.toString() ?? '', name: 'ORG_SIGN_UP');

      final web3Client = Web3Client(WEB3_RPC_URI, http.Client());
      final orgContract = Organization_controller(
        address: EthereumAddress.fromHex(ORGANIZATION_CONTROLLER_ADDRESS),
        client: web3Client,
      );
      final transactionData = orgContract.createOrganization(
        org!.name!,
        hexToBytes(org.imageCID!),
        hexToBytes(org.signature),
        BigInt.parse(org.nonce),
      );
      final transaction = transactionData.transaction;
      // final txHash =
      //     await transactionData.sendTransaction(EthPrivateKey.fromHex(pvtKey));
      //eth_maxPriorityFeePerGas

      // _walletRepository.launchWalletApp();
      // try {
      // final txHash = await _walletRepository.sendTransaction(transaction);
      // final txStatus = await _walletRepository.waitForTx(txHash);
      // log(txStatus.toString(), name: 'TX_STATUS');
      // } catch (e, t) {
      //   debugPrint('ERROR $e $t');
      // }
      emit(state.copyWith(
        signUpLoading: false,
        signUpOption: some(right(unit)),
        openWalletOption: none(),
      ));
    } catch (e, t) {
      debugPrint('ERROR $e $t');
      emit(state.copyWith(
        signUpLoading: false,
        signUpOption: some(left(unit)),
        openWalletOption: none(),
      ));
    }
  }

  void signUpLancer({
    required String name,
    required String description,
    required String email,
    required String country,
    required String imagePath,
  }) async {
    emit(state.copyWith(
      signUpLoading: true,
      signUpOption: none(),
      openWalletOption: none(),
    ));

    try {
      final address = _walletRepository.getUserAddress()!;
      final lancerResponse =
          await _lancerRepository.fetchLancer(address: address);

      _walletRepository.launchWalletApp();

      final signature =
          await _walletRepository.signMessage(lancerResponse!.message!);
      log('$signature', name: 'SIGN_RESPONSE');

      final lancer = await _lancerRepository.createLancerProfile(
          params: LancerParams(
        name: name,
        address: address,
        description: description,
        email: email,
        filePath: imagePath,
        signature: signature,
      ));
      log(lancer?.toString() ?? '', name: 'LANCER_SIGN_UP');
      emit(state.copyWith(
        signUpLoading: false,
        signUpOption: some(right(unit)),
        openWalletOption: none(),
      ));
    } catch (e) {
      emit(state.copyWith(
        signUpLoading: false,
        signUpOption: some(left(unit)),
        openWalletOption: none(),
      ));
    }
  }

  Future<UserType> getUserType() async {
    final address = _walletRepository.getUserAddress();
    log(address.toString(), name: 'ADDRESS');
    if (address == null) {
      return const UserType.none();
    }

    final futures = await Future.wait([
      _organizationRepository.findOrganizationByAddress(address: address),
      _lancerRepository.fetchLancer(address: address),
    ]);
    final org = futures[0] as OrganizationModel?;
    log(org?.toString() ?? '', name: 'ORG_MODEL');
    final lancer = futures[1] as LancerSignatureProfile?;
    log(lancer?.toString() ?? '', name: 'LANCER_MODEL');

    if (org == null && lancer == null) {
      return const UserType.newUser();
    } else if (org != null) {
      return UserType.org(org: org);
    } else if (lancer != null && lancer.registered) {
      return UserType.lancer(lancer: lancer);
    }

    return const UserType.newUser();
  }

  Future<void> logout() async {
    await _walletRepository.disconnect();
    emit(state.copyWith(
        isWalletConnected: false, userType: const UserType.none()));
  }
}
