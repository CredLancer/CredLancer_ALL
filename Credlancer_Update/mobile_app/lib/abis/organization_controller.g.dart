// Generated code, do not modify. Run `build_runner build` to re-generate!
// @dart=2.12
// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:web3dart/web3dart.dart' as _i1;
import 'dart:typed_data' as _i2;

final _contractAbi = _i1.ContractAbi.fromJson(
  '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InvalidNonce","type":"error"},{"inputs":[],"name":"InvalidOrganizationId","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"OrganizationsPerAddressLimitReached","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"ZeroAddressCannotBeAdmin","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"orgId","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"orgId","type":"uint256"},{"indexed":true,"internalType":"address","name":"admin","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"bytes","name":"imageCID","type":"bytes"}],"name":"OrganizationCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"orgId","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"oldImageCID","type":"bytes"},{"indexed":false,"internalType":"bytes","name":"newImageCID","type":"bytes"}],"name":"OrganizationImageCIDChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"orgId","type":"uint256"},{"indexed":false,"internalType":"string","name":"oldName","type":"string"},{"indexed":false,"internalType":"string","name":"newName","type":"string"}],"name":"OrganizationNameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"uint256","name":"orgId","type":"uint256"}],"name":"adminOf","outputs":[{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"orgId","type":"uint256"},{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes","name":"imageCID","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"createOrganization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orgId","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nonceUsed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"organizationIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"organizations","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes","name":"imageCID","type":"bytes"},{"internalType":"address","name":"admin","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newSigner","type":"address"}],"name":"setSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalOrganizations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orgId","type":"uint256"},{"internalType":"bytes","name":"newImageCID","type":"bytes"},{"internalType":"bytes","name":"signature","type":"bytes"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"name":"updateImageCID","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"orgId","type":"uint256"},{"internalType":"string","name":"newName","type":"string"}],"name":"updateName","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  'Organization_controller',
);

class Organization_controller extends _i1.GeneratedContract {
  Organization_controller({
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

  /// The optional [atBlock] parameter can be used to view historical data. When
  /// set, the function will be evaluated in the specified block. By default, the
  /// latest on-chain block will be used.
  Future<_i1.EthereumAddress> adminOf(
    BigInt orgId, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[1];
    assert(checkSignature(function, '5537a6fa'));
    final params = [orgId];
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
  _i1.TransactionData changeAdmin(
    BigInt orgId,
    _i1.EthereumAddress newAdmin, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[2];
    assert(checkSignature(function, '6cc5af29'));
    final params = [
      orgId,
      newAdmin,
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
  _i1.TransactionData createOrganization(
    String name,
    _i2.Uint8List imageCID,
    _i2.Uint8List signature,
    BigInt nonce, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[3];
    assert(checkSignature(function, 'ef5235d3'));
    final params = [
      name,
      imageCID,
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
  Future<bool> exists(
    BigInt orgId, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[4];
    assert(checkSignature(function, '4f558e79'));
    final params = [orgId];
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
  Future<bool> nonceUsed(
    BigInt $param8, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[5];
    assert(checkSignature(function, '94d0d3a6'));
    final params = [$param8];
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
  Future<BigInt> organizationIds(
    _i1.EthereumAddress $param9, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[6];
    assert(checkSignature(function, 'edd76d05'));
    final params = [$param9];
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
  Future<Organizations> organizations(
    BigInt $param10, {
    _i1.BlockNum? atBlock,
  }) async {
    final function = self.abi.functions[7];
    assert(checkSignature(function, 'e792dd8a'));
    final params = [$param10];
    final response = await read(
      function,
      params,
      atBlock,
    );
    return Organizations(response);
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

  /// The optional [transaction] parameter can be used to override parameters
  /// like the gas price, nonce and max gas. The `data` and `to` fields will be
  /// set by the contract.
  _i1.TransactionData renounceOwnership({_i1.Transaction? transaction}) {
    final function = self.abi.functions[11];
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
  _i1.TransactionData setSigner(
    _i1.EthereumAddress newSigner, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[12];
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
    final function = self.abi.functions[13];
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
  Future<BigInt> totalOrganizations({_i1.BlockNum? atBlock}) async {
    final function = self.abi.functions[14];
    assert(checkSignature(function, '4cf5d552'));
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
    final function = self.abi.functions[15];
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
    final function = self.abi.functions[16];
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
  _i1.TransactionData updateImageCID(
    BigInt orgId,
    _i2.Uint8List newImageCID,
    _i2.Uint8List signature,
    BigInt nonce, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[17];
    assert(checkSignature(function, '82e885cf'));
    final params = [
      orgId,
      newImageCID,
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
  _i1.TransactionData updateName(
    BigInt orgId,
    String newName, {
    _i1.Transaction? transaction,
  }) {
    final function = self.abi.functions[18];
    assert(checkSignature(function, '53e76f2c'));
    final params = [
      orgId,
      newName,
    ];
    return getWriteTransaction(
      transaction,
      function,
      params,
    );
  }

  /// Returns a live stream of all AdminChanged events emitted by this contract.
  Stream<AdminChanged> adminChangedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('AdminChanged');
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
      return AdminChanged(decoded);
    });
  }

  /// Returns a live stream of all OrganizationCreated events emitted by this contract.
  Stream<OrganizationCreated> organizationCreatedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('OrganizationCreated');
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
      return OrganizationCreated(decoded);
    });
  }

  /// Returns a live stream of all OrganizationImageCIDChanged events emitted by this contract.
  Stream<OrganizationImageCIDChanged> organizationImageCIDChangedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('OrganizationImageCIDChanged');
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
      return OrganizationImageCIDChanged(decoded);
    });
  }

  /// Returns a live stream of all OrganizationNameChanged events emitted by this contract.
  Stream<OrganizationNameChanged> organizationNameChangedEvents({
    _i1.BlockNum? fromBlock,
    _i1.BlockNum? toBlock,
  }) {
    final event = self.event('OrganizationNameChanged');
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
      return OrganizationNameChanged(decoded);
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
}

class Organizations {
  Organizations(List<dynamic> response)
      : id = (response[0] as BigInt),
        name = (response[1] as String),
        imageCID = (response[2] as _i2.Uint8List),
        admin = (response[3] as _i1.EthereumAddress);

  final BigInt id;

  final String name;

  final _i2.Uint8List imageCID;

  final _i1.EthereumAddress admin;
}

class AdminChanged {
  AdminChanged(List<dynamic> response)
      : orgId = (response[0] as BigInt),
        oldAdmin = (response[1] as _i1.EthereumAddress),
        newAdmin = (response[2] as _i1.EthereumAddress);

  final BigInt orgId;

  final _i1.EthereumAddress oldAdmin;

  final _i1.EthereumAddress newAdmin;
}

class OrganizationCreated {
  OrganizationCreated(List<dynamic> response)
      : orgId = (response[0] as BigInt),
        admin = (response[1] as _i1.EthereumAddress),
        name = (response[2] as String),
        imageCID = (response[3] as _i2.Uint8List);

  final BigInt orgId;

  final _i1.EthereumAddress admin;

  final String name;

  final _i2.Uint8List imageCID;
}

class OrganizationImageCIDChanged {
  OrganizationImageCIDChanged(List<dynamic> response)
      : orgId = (response[0] as BigInt),
        oldImageCID = (response[1] as _i2.Uint8List),
        newImageCID = (response[2] as _i2.Uint8List);

  final BigInt orgId;

  final _i2.Uint8List oldImageCID;

  final _i2.Uint8List newImageCID;
}

class OrganizationNameChanged {
  OrganizationNameChanged(List<dynamic> response)
      : orgId = (response[0] as BigInt),
        oldName = (response[1] as String),
        newName = (response[2] as String);

  final BigInt orgId;

  final String oldName;

  final String newName;
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

class Unpaused {
  Unpaused(List<dynamic> response)
      : account = (response[0] as _i1.EthereumAddress);

  final _i1.EthereumAddress account;
}
