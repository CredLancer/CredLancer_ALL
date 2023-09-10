// Generated code, do not modify. Run `build_runner build` to re-generate!
// @dart=2.12
// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:web3dart/web3dart.dart' as _i1;import 'dart:typed_data' as _i2;final _contractAbi = _i1.ContractAbi.fromJson('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"SoulboundTokenCannotBeApproved","type":"error"},{"inputs":[],"name":"SoulboundTokenCannotBeTransferred","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"URI_SETTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]', 'Credential_controller', );class Credential_controller extends _i1.GeneratedContract {Credential_controller({required _i1.EthereumAddress address, required _i1.Web3Client client, int? chainId, }) : super(_i1.DeployedContract(_contractAbi, address, ), client, chainId, );

/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<_i2.Uint8List> DEFAULT_ADMIN_ROLE({_i1.BlockNum? atBlock}) async  { final function = self.abi.functions  [
1
];
assert(checkSignature(function, 'a217fddf'));
final params = [];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as _i2.Uint8List); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<_i2.Uint8List> MINTER_ROLE({_i1.BlockNum? atBlock}) async  { final function = self.abi.functions  [
2
];
assert(checkSignature(function, 'd5391393'));
final params = [];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as _i2.Uint8List); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<_i2.Uint8List> URI_SETTER_ROLE({_i1.BlockNum? atBlock}) async  { final function = self.abi.functions  [
3
];
assert(checkSignature(function, '7f345710'));
final params = [];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as _i2.Uint8List); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<BigInt> balanceOf(_i1.EthereumAddress account, BigInt id, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
4
];
assert(checkSignature(function, '00fdd58e'));
final params = [account, id, ];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as BigInt); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<List<BigInt>> balanceOfBatch(List<_i1.EthereumAddress> accounts, List<BigInt> ids, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
5
];
assert(checkSignature(function, '4e1273f4'));
final params = [accounts, ids, ];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as List<dynamic>).cast<BigInt>(); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<_i2.Uint8List> getRoleAdmin(_i2.Uint8List role, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
6
];
assert(checkSignature(function, '248a9ca3'));
final params = [role];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as _i2.Uint8List); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData grantRole(_i2.Uint8List role, _i1.EthereumAddress account, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
7
];
assert(checkSignature(function, '2f2ff15d'));
final params = [role, account, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<bool> hasRole(_i2.Uint8List role, _i1.EthereumAddress account, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
8
];
assert(checkSignature(function, '91d14854'));
final params = [role, account, ];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as bool); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<bool> isApprovedForAll(_i1.EthereumAddress account, _i1.EthereumAddress operator, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
9
];
assert(checkSignature(function, 'e985e9c5'));
final params = [account, operator, ];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as bool); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData mint(_i1.EthereumAddress account, BigInt id, BigInt amount, _i2.Uint8List data, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
10
];
assert(checkSignature(function, '731133e9'));
final params = [account, id, amount, data, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData mintBatch(_i1.EthereumAddress to, List<BigInt> ids, List<BigInt> amounts, _i2.Uint8List data, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
11
];
assert(checkSignature(function, '1f7fdffa'));
final params = [to, ids, amounts, data, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData renounceRole(_i2.Uint8List role, _i1.EthereumAddress account, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
12
];
assert(checkSignature(function, '36568abe'));
final params = [role, account, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData revokeRole(_i2.Uint8List role, _i1.EthereumAddress account, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
13
];
assert(checkSignature(function, 'd547741f'));
final params = [role, account, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData safeBatchTransferFrom(_i1.EthereumAddress from, _i1.EthereumAddress to, List<BigInt> ids, List<BigInt> amounts, _i2.Uint8List data, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
14
];
assert(checkSignature(function, '2eb2c2d6'));
final params = [from, to, ids, amounts, data, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData safeTransferFrom(_i1.EthereumAddress from, _i1.EthereumAddress to, BigInt id, BigInt amount, _i2.Uint8List data, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
15
];
assert(checkSignature(function, 'f242432a'));
final params = [from, to, id, amount, data, ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData setApprovalForAll(_i1.EthereumAddress $param33, bool $param34, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
16
];
assert(checkSignature(function, 'a22cb465'));
final params = [, , ];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [transaction] parameter can be used to override parameters
/// like the gas price, nonce and max gas. The `data` and `to` fields will be
/// set by the contract.
_i1.TransactionData setURI(String newuri, {_i1.Transaction? transaction, }) { final function = self.abi.functions  [
17
];
assert(checkSignature(function, '02fe5305'));
final params = [newuri];
return  getWriteTransaction(transaction, function, params, ); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<bool> supportsInterface(_i2.Uint8List interfaceId, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
18
];
assert(checkSignature(function, '01ffc9a7'));
final params = [interfaceId];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as bool); } 
/// The optional [atBlock] parameter can be used to view historical data. When
/// set, the function will be evaluated in the specified block. By default, the
/// latest on-chain block will be used.
Future<String> uri(BigInt $param37, {_i1.BlockNum? atBlock, }) async  { final function = self.abi.functions  [
19
];
assert(checkSignature(function, '0e89341c'));
final params = [$param37];
final response =  await read(function, params, atBlock, );
return  (response  [
0
] as String); } 
/// Returns a live stream of all ApprovalForAll events emitted by this contract.
Stream<ApprovalForAll> approvalForAllEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('ApprovalForAll');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  ApprovalForAll(decoded); } ); } 
/// Returns a live stream of all RoleAdminChanged events emitted by this contract.
Stream<RoleAdminChanged> roleAdminChangedEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('RoleAdminChanged');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  RoleAdminChanged(decoded); } ); } 
/// Returns a live stream of all RoleGranted events emitted by this contract.
Stream<RoleGranted> roleGrantedEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('RoleGranted');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  RoleGranted(decoded); } ); } 
/// Returns a live stream of all RoleRevoked events emitted by this contract.
Stream<RoleRevoked> roleRevokedEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('RoleRevoked');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  RoleRevoked(decoded); } ); } 
/// Returns a live stream of all TransferBatch events emitted by this contract.
Stream<TransferBatch> transferBatchEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('TransferBatch');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  TransferBatch(decoded); } ); } 
/// Returns a live stream of all TransferSingle events emitted by this contract.
Stream<TransferSingle> transferSingleEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('TransferSingle');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  TransferSingle(decoded); } ); } 
/// Returns a live stream of all URI events emitted by this contract.
Stream<URI> uRIEvents({_i1.BlockNum? fromBlock, _i1.BlockNum? toBlock, }) { final event = self.event('URI');
final filter = _i1.FilterOptions.events(contract: self, event: event, fromBlock: fromBlock, toBlock: toBlock, );
return  client.events(filter).map((_i1.FilterEvent result) { final decoded = event.decodeResults(result.topics!, result.data!, );
return  URI(decoded); } ); } 
 }
class ApprovalForAll {ApprovalForAll(List<dynamic> response) : account = (response[0] as _i1.EthereumAddress), operator = (response[1] as _i1.EthereumAddress), approved = (response[2] as bool);

final _i1.EthereumAddress account;

final _i1.EthereumAddress operator;

final bool approved;

 }
class RoleAdminChanged {RoleAdminChanged(List<dynamic> response) : role = (response[0] as _i2.Uint8List), previousAdminRole = (response[1] as _i2.Uint8List), newAdminRole = (response[2] as _i2.Uint8List);

final _i2.Uint8List role;

final _i2.Uint8List previousAdminRole;

final _i2.Uint8List newAdminRole;

 }
class RoleGranted {RoleGranted(List<dynamic> response) : role = (response[0] as _i2.Uint8List), account = (response[1] as _i1.EthereumAddress), sender = (response[2] as _i1.EthereumAddress);

final _i2.Uint8List role;

final _i1.EthereumAddress account;

final _i1.EthereumAddress sender;

 }
class RoleRevoked {RoleRevoked(List<dynamic> response) : role = (response[0] as _i2.Uint8List), account = (response[1] as _i1.EthereumAddress), sender = (response[2] as _i1.EthereumAddress);

final _i2.Uint8List role;

final _i1.EthereumAddress account;

final _i1.EthereumAddress sender;

 }
class TransferBatch {TransferBatch(List<dynamic> response) : operator = (response[0] as _i1.EthereumAddress), from = (response[1] as _i1.EthereumAddress), to = (response[2] as _i1.EthereumAddress), ids = (response[3] as List<dynamic>).cast<BigInt>(), values = (response[4] as List<dynamic>).cast<BigInt>();

final _i1.EthereumAddress operator;

final _i1.EthereumAddress from;

final _i1.EthereumAddress to;

final List<BigInt> ids;

final List<BigInt> values;

 }
class TransferSingle {TransferSingle(List<dynamic> response) : operator = (response[0] as _i1.EthereumAddress), from = (response[1] as _i1.EthereumAddress), to = (response[2] as _i1.EthereumAddress), id = (response[3] as BigInt), value = (response[4] as BigInt);

final _i1.EthereumAddress operator;

final _i1.EthereumAddress from;

final _i1.EthereumAddress to;

final BigInt id;

final BigInt value;

 }
class URI {URI(List<dynamic> response) : value = (response[0] as String), id = (response[1] as BigInt);

final String value;

final BigInt id;

 }
