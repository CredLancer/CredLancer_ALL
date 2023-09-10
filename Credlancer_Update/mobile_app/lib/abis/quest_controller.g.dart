// Generated code, do not modify. Run `build_runner build` to re-generate!
// @dart=2.12
// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:web3dart/web3dart.dart' as _i1;
import 'dart:typed_data' as _i2;

final _contractAbi = _i1.ContractAbi.fromJson(
  '[{"inputs":[{"internalType":"contract OrganizationController","name":"_organizationController","type":"address"},{"internalType":"contract Credential","name":"_credential","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"DeadlineAlreadyPassed","type":"error"},{"inputs":[],"name":"FundTransferFailed","type":"error"},{"inputs":[],"name":"InsufficientBalance","type":"error"},{"inputs":[],"name":"InvalidNonce","type":"error"},{"inputs":[],"name":"InvalidOrganizationId","type":"error"},{"inputs":[],"name":"InvalidProposalId","type":"error"},{"inputs":[],"name":"InvalidQuestId","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidValue","type":"error"},{"inputs":[],"name":"OrganizationAdminCannotApply","type":"error"},{"inputs":[],"name":"ProposalAlreadyInSameStatus","type":"error"},{"inputs":[],"name":"ProposalAlreadyRejected","type":"error"},{"inputs":[],"name":"ProposalAlreadySent","type":"error"},{"inputs":[],"name":"ProposalNotAccepted","type":"error"},{"inputs":[],"name":"ProposalNotFound","type":"error"},{"inputs":[],"name":"QuestNotOpen","type":"error"},{"inputs":[],"name":"RewardAlreadyGranted","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"WorkAlreadyRewarded","type":"error"},{"inputs":[],"name":"WorkAlreadySubmitted","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lancer","type":"address"},{"indexed":true,"internalType":"address","name":"withdrawalAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"questId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"bytes","name":"proposalCID","type":"bytes"}],"name":"ProposalCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"questId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"enum QuestController.ProposalStatus","name":"oldStatus","type":"uint8"},{"indexed":false,"internalType":"enum QuestController.ProposalStatus","name":"newStatus","type":"uint8"}],"name":"ProposalStatusChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"questId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"organizationId","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"questCID","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"deadline","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"QuestCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"questId","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":true,"internalType":"address","name":"worker","type":"address"},{"indexed":false,"internalType":"bytes","name":"workCID","type":"bytes"}],"name":"WorkSubmitted","type":"event"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"acceptProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"acceptWork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"questCID","type":"bytes"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"orgId","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"createQuest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"credential","outputs":[{"internalType":"contract Credential","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nonceUsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"organizationController","outputs":[{"internalType":"contract OrganizationController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"proposalExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"proposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"cid","type":"bytes"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"questId","type":"uint256"},{"internalType":"enum QuestController.ProposalStatus","name":"status","type":"uint8"},{"internalType":"bytes","name":"workCID","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"questId","type":"uint256"}],"name":"questExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"quests","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"cid","type":"bytes"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"orgId","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"winnerProposalId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"rejectProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"questId","type":"uint256"},{"internalType":"bytes","name":"proposalCID","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"sendProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"questId","type":"uint256"}],"name":"statusOfQuest","outputs":[{"internalType":"enum QuestController.QuestStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"questId","type":"uint256"},{"internalType":"bytes","name":"workCID","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"submitWork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalProposals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalQuests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"withdrawalAddress","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  'Quest_controller',
);

class Quest_controller extends _i1.GeneratedContract {
  Quest_controller({
    required _i1.EthereumAddress address,
    required _i1.Web3Client client,
    int? chainId,
  }) : super(
          _i1.DeployedContract(
            _contractAbi,
            address,
          ),
          client,
          chainId,
        );

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData acceptProposal(
    BigInt proposalId, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[1];
    assert(checkSignature(function, '60c5cc3a'));
    final params = [proposalId];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData acceptWork(
    BigInt proposalId, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[2];
    assert(checkSignature(function, '873a2878'));
    final params = [proposalId];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> balanceOf(
    _i1.EthereumAddress $param2, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[3];
    assert(checkSignature(function, '70a08231'));
    final params = [$param2];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData createQuest(
    _i2.Uint8List questCID,
    BigInt reward,
    BigInt orgId,
    BigInt deadline,
    _i2.Uint8List signature,
    BigInt nonce, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[4];
    assert(checkSignature(function, 'ca454a05'));
    final params = [
      questCID,
      reward,
      orgId,
      deadline,
      signature,
      nonce,
    ];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<_i1.EthereumAddress> credential({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[5];
    assert(checkSignature(function, '26f36875'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as _i1.EthereumAddress);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<bool> nonceUsed(
    BigInt $param9, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[6];
    assert(checkSignature(function, '94d0d3a6'));
    final params = [$param9];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as bool);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<_i1.EthereumAddress> organizationController(
      {_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[7];
    assert(checkSignature(function, 'a4b19bd3'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as _i1.EthereumAddress);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<_i1.EthereumAddress> owner({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[8];
    assert(checkSignature(function, '8da5cb5b'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as _i1.EthereumAddress);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData pause({_i1.Transaction? transaction}) {
    final function = self.abi.functions[9];
    assert(checkSignature(function, '8456cb59'));
    final params = [];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<bool> paused({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[10];
    assert(checkSignature(function, '5c975abb'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as bool);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<bool> proposalExists(
    BigInt proposalId, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[11];
    assert(checkSignature(function, '1374b22d'));
    final params = [proposalId];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as bool);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> proposalIds(
    BigInt $param11,
    _i1.EthereumAddress $param12, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[12];
    assert(checkSignature(function, '8165e150'));
    final params = [
      $param11,
      $param12,
    ];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<Proposals> proposals(
    BigInt $param13, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[13];
    assert(checkSignature(function, '013cf08b'));
    final params = [$param13];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return Proposals(response);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<bool> questExists(
    BigInt questId, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[14];
    assert(checkSignature(function, '75be329b'));
    final params = [questId];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as bool);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<Quests> quests(
    BigInt $param15, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[15];
    assert(checkSignature(function, 'e085f980'));
    final params = [$param15];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return Quests(response);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData rejectProposal(
    BigInt proposalId, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[16];
    assert(checkSignature(function, 'bc28d878'));
    final params = [proposalId];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData renounceOwnership({_i1.Transaction? transaction}) {
    final function = self.abi.functions[17];
    assert(checkSignature(function, '715018a6'));
    final params = [];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData sendProposal(
    BigInt questId,
    _i2.Uint8List proposalCID,
    _i2.Uint8List signature,
    BigInt nonce, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[18];
    assert(checkSignature(function, 'f1928658'));
    final params = [
      questId,
      proposalCID,
      signature,
      nonce,
    ];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData setSigner(
    _i1.EthereumAddress newSigner, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[19];
    assert(checkSignature(function, '6c19e783'));
    final params = [newSigner];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<_i1.EthereumAddress> signer({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[20];
    assert(checkSignature(function, '238ac933'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as _i1.EthereumAddress);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> statusOfQuest(
    BigInt questId, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[21];
    assert(checkSignature(function, 'e9cab0c0'));
    final params = [questId];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData submitWork(
    BigInt questId,
    _i2.Uint8List workCID,
    _i2.Uint8List signature,
    BigInt nonce, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[22];
    assert(checkSignature(function, 'b8588d01'));
    final params = [
      questId,
      workCID,
      signature,
      nonce,
    ];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> totalProposals({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[23];
    assert(checkSignature(function, 'a78d80fc'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<BigInt> totalQuests({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[24];
    assert(checkSignature(function, '54fcf2e0'));
    final params = [];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return (response[0] as BigInt);
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData transferOwnership(
    _i1.EthereumAddress newOwner, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[25];
    assert(checkSignature(function, 'f2fde38b'));
    final params = [newOwner];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData unpause({_i1.Transaction? transaction}) {
    final function = self.abi.functions[26];
    assert(checkSignature(function, '3f4ba83a'));
    final params = [];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData withdraw(
    _i1.EthereumAddress withdrawalAddress, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[27];
    assert(checkSignature(function, '51cff8d9'));
    final params = [withdrawalAddress];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// Returns a live stream of all FundTransferred events emitted by this contract.
  Stream<FundTransferred> fundTransferredEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('FundTransferred');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return FundTransferred(decoded);
    });
  }

  /// Returns a live stream of all OwnershipTransferred events emitted by this contract.
  Stream<OwnershipTransferred> ownershipTransferredEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('OwnershipTransferred');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return OwnershipTransferred(decoded);
    });
  }

  /// Returns a live stream of all Paused events emitted by this contract.
  Stream<Paused> pausedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('Paused');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return Paused(decoded);
    });
  }

  /// Returns a live stream of all ProposalCreated events emitted by this contract.
  Stream<ProposalCreated> proposalCreatedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('ProposalCreated');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return ProposalCreated(decoded);
    });
  }

  /// Returns a live stream of all ProposalStatusChanged events emitted by this contract.
  Stream<ProposalStatusChanged> proposalStatusChangedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('ProposalStatusChanged');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return ProposalStatusChanged(decoded);
    });
  }

  /// Returns a live stream of all QuestCreated events emitted by this contract.
  Stream<QuestCreated> questCreatedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('QuestCreated');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return QuestCreated(decoded);
    });
  }

  /// Returns a live stream of all Unpaused events emitted by this contract.
  Stream<Unpaused> unpausedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('Unpaused');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return Unpaused(decoded);
    });
  }

  /// Returns a live stream of all WorkSubmitted events emitted by this contract.
  Stream<WorkSubmitted> workSubmittedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('WorkSubmitted');
    final filter = _i1.FilterOptions.events(
      contract: self,
      event: event,
      fromBlock: fromBlock,
      toBlock: toBlock,
    );
    return client.events(filter).map((_i1.FilterEvent result) {
      final decoded = event.decodeResults(
        result.topics!,
        result.data!,
      );
      return WorkSubmitted(decoded);
    });
  }
}

class Proposals {
  Proposals(List<dynamic> response)
      : id = (response[0] as BigInt),
        cid = (response[1] as _i2.Uint8List),
        proposer = (response[2] as _i1.EthereumAddress),
        questId = (response[3] as BigInt),
        status = (response[4] as BigInt),
        workCID = (response[5] as _i2.Uint8List);

  final BigInt id;

  final _i2.Uint8List cid;

  final _i1.EthereumAddress proposer;

  final BigInt questId;

  final BigInt status;

  final _i2.Uint8List workCID;
}

class Quests {
  Quests(List<dynamic> response)
      : id = (response[0] as BigInt),
        cid = (response[1] as _i2.Uint8List),
        reward = (response[2] as BigInt),
        orgId = (response[3] as BigInt),
        deadline = (response[4] as BigInt),
        winnerProposalId = (response[5] as BigInt);

  final BigInt id;

  final _i2.Uint8List cid;

  final BigInt reward;

  final BigInt orgId;

  final BigInt deadline;

  final BigInt winnerProposalId;
}

class FundTransferred {
  FundTransferred(List<dynamic> response)
      : lancer = (response[0] as _i1.EthereumAddress),
        withdrawalAddress = (response[1] as _i1.EthereumAddress),
        amount = (response[2] as BigInt);

  final _i1.EthereumAddress lancer;

  final _i1.EthereumAddress withdrawalAddress;

  final BigInt amount;
}

class OwnershipTransferred {
  OwnershipTransferred(List<dynamic> response)
      : previousOwner = (response[0] as _i1.EthereumAddress),
        newOwner = (response[1] as _i1.EthereumAddress);

  final _i1.EthereumAddress previousOwner;

  final _i1.EthereumAddress newOwner;
}

class Paused {
  Paused(List<dynamic> response)
      : account = (response[0] as _i1.EthereumAddress);

  final _i1.EthereumAddress account;
}

class ProposalCreated {
  ProposalCreated(List<dynamic> response)
      : questId = (response[0] as BigInt),
        proposalId = (response[1] as BigInt),
        proposer = (response[2] as _i1.EthereumAddress),
        proposalCID = (response[3] as _i2.Uint8List);

  final BigInt questId;

  final BigInt proposalId;

  final _i1.EthereumAddress proposer;

  final _i2.Uint8List proposalCID;
}

class ProposalStatusChanged {
  ProposalStatusChanged(List<dynamic> response)
      : questId = (response[0] as BigInt),
        proposalId = (response[1] as BigInt),
        oldStatus = (response[2] as BigInt),
        newStatus = (response[3] as BigInt);

  final BigInt questId;

  final BigInt proposalId;

  final BigInt oldStatus;

  final BigInt newStatus;
}

class QuestCreated {
  QuestCreated(List<dynamic> response)
      : questId = (response[0] as BigInt),
        organizationId = (response[1] as BigInt),
        questCID = (response[2] as _i2.Uint8List),
        deadline = (response[3] as BigInt),
        reward = (response[4] as BigInt);

  final BigInt questId;

  final BigInt organizationId;

  final _i2.Uint8List questCID;

  final BigInt deadline;

  final BigInt reward;
}

class Unpaused {
  Unpaused(List<dynamic> response)
      : account = (response[0] as _i1.EthereumAddress);

  final _i1.EthereumAddress account;
}

class WorkSubmitted {
  WorkSubmitted(List<dynamic> response)
      : questId = (response[0] as BigInt),
        proposalId = (response[1] as BigInt),
        worker = (response[2] as _i1.EthereumAddress),
        workCID = (response[3] as _i2.Uint8List);

  final BigInt questId;

  final BigInt proposalId;

  final _i1.EthereumAddress worker;

  final _i2.Uint8List workCID;
}
