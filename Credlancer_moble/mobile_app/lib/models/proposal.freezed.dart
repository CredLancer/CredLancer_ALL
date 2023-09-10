// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'proposal.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

QuestProposalType _$QuestProposalTypeFromJson(Map<String, dynamic> json) {
  return _QuestProposalType.fromJson(json);
}

/// @nodoc
mixin _$QuestProposalType {
  String get id => throw _privateConstructorUsedError;
  QuestProposer get proposer => throw _privateConstructorUsedError;
  int get blockNumber => throw _privateConstructorUsedError;
  QuestProposalFile get file => throw _privateConstructorUsedError;
  ProposalStatus get status => throw _privateConstructorUsedError;
  int get questId => throw _privateConstructorUsedError;
  String get fileCID => throw _privateConstructorUsedError;
  String? get workCID => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $QuestProposalTypeCopyWith<QuestProposalType> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $QuestProposalTypeCopyWith<$Res> {
  factory $QuestProposalTypeCopyWith(
          QuestProposalType value, $Res Function(QuestProposalType) then) =
      _$QuestProposalTypeCopyWithImpl<$Res, QuestProposalType>;
  @useResult
  $Res call(
      {String id,
      QuestProposer proposer,
      int blockNumber,
      QuestProposalFile file,
      ProposalStatus status,
      int questId,
      String fileCID,
      String? workCID});

  $QuestProposerCopyWith<$Res> get proposer;
  $QuestProposalFileCopyWith<$Res> get file;
}

/// @nodoc
class _$QuestProposalTypeCopyWithImpl<$Res, $Val extends QuestProposalType>
    implements $QuestProposalTypeCopyWith<$Res> {
  _$QuestProposalTypeCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? proposer = null,
    Object? blockNumber = null,
    Object? file = null,
    Object? status = null,
    Object? questId = null,
    Object? fileCID = null,
    Object? workCID = freezed,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      proposer: null == proposer
          ? _value.proposer
          : proposer // ignore: cast_nullable_to_non_nullable
              as QuestProposer,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      file: null == file
          ? _value.file
          : file // ignore: cast_nullable_to_non_nullable
              as QuestProposalFile,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ProposalStatus,
      questId: null == questId
          ? _value.questId
          : questId // ignore: cast_nullable_to_non_nullable
              as int,
      fileCID: null == fileCID
          ? _value.fileCID
          : fileCID // ignore: cast_nullable_to_non_nullable
              as String,
      workCID: freezed == workCID
          ? _value.workCID
          : workCID // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $QuestProposerCopyWith<$Res> get proposer {
    return $QuestProposerCopyWith<$Res>(_value.proposer, (value) {
      return _then(_value.copyWith(proposer: value) as $Val);
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $QuestProposalFileCopyWith<$Res> get file {
    return $QuestProposalFileCopyWith<$Res>(_value.file, (value) {
      return _then(_value.copyWith(file: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_QuestProposalTypeCopyWith<$Res>
    implements $QuestProposalTypeCopyWith<$Res> {
  factory _$$_QuestProposalTypeCopyWith(_$_QuestProposalType value,
          $Res Function(_$_QuestProposalType) then) =
      __$$_QuestProposalTypeCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      QuestProposer proposer,
      int blockNumber,
      QuestProposalFile file,
      ProposalStatus status,
      int questId,
      String fileCID,
      String? workCID});

  @override
  $QuestProposerCopyWith<$Res> get proposer;
  @override
  $QuestProposalFileCopyWith<$Res> get file;
}

/// @nodoc
class __$$_QuestProposalTypeCopyWithImpl<$Res>
    extends _$QuestProposalTypeCopyWithImpl<$Res, _$_QuestProposalType>
    implements _$$_QuestProposalTypeCopyWith<$Res> {
  __$$_QuestProposalTypeCopyWithImpl(
      _$_QuestProposalType _value, $Res Function(_$_QuestProposalType) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? proposer = null,
    Object? blockNumber = null,
    Object? file = null,
    Object? status = null,
    Object? questId = null,
    Object? fileCID = null,
    Object? workCID = freezed,
  }) {
    return _then(_$_QuestProposalType(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      proposer: null == proposer
          ? _value.proposer
          : proposer // ignore: cast_nullable_to_non_nullable
              as QuestProposer,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      file: null == file
          ? _value.file
          : file // ignore: cast_nullable_to_non_nullable
              as QuestProposalFile,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ProposalStatus,
      questId: null == questId
          ? _value.questId
          : questId // ignore: cast_nullable_to_non_nullable
              as int,
      fileCID: null == fileCID
          ? _value.fileCID
          : fileCID // ignore: cast_nullable_to_non_nullable
              as String,
      workCID: freezed == workCID
          ? _value.workCID
          : workCID // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_QuestProposalType implements _QuestProposalType {
  const _$_QuestProposalType(
      {required this.id,
      required this.proposer,
      required this.blockNumber,
      required this.file,
      required this.status,
      required this.questId,
      required this.fileCID,
      this.workCID});

  factory _$_QuestProposalType.fromJson(Map<String, dynamic> json) =>
      _$$_QuestProposalTypeFromJson(json);

  @override
  final String id;
  @override
  final QuestProposer proposer;
  @override
  final int blockNumber;
  @override
  final QuestProposalFile file;
  @override
  final ProposalStatus status;
  @override
  final int questId;
  @override
  final String fileCID;
  @override
  final String? workCID;

  @override
  String toString() {
    return 'QuestProposalType(id: $id, proposer: $proposer, blockNumber: $blockNumber, file: $file, status: $status, questId: $questId, fileCID: $fileCID, workCID: $workCID)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_QuestProposalType &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.proposer, proposer) ||
                other.proposer == proposer) &&
            (identical(other.blockNumber, blockNumber) ||
                other.blockNumber == blockNumber) &&
            (identical(other.file, file) || other.file == file) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.questId, questId) || other.questId == questId) &&
            (identical(other.fileCID, fileCID) || other.fileCID == fileCID) &&
            (identical(other.workCID, workCID) || other.workCID == workCID));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, proposer, blockNumber, file,
      status, questId, fileCID, workCID);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_QuestProposalTypeCopyWith<_$_QuestProposalType> get copyWith =>
      __$$_QuestProposalTypeCopyWithImpl<_$_QuestProposalType>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_QuestProposalTypeToJson(
      this,
    );
  }
}

abstract class _QuestProposalType implements QuestProposalType {
  const factory _QuestProposalType(
      {required final String id,
      required final QuestProposer proposer,
      required final int blockNumber,
      required final QuestProposalFile file,
      required final ProposalStatus status,
      required final int questId,
      required final String fileCID,
      final String? workCID}) = _$_QuestProposalType;

  factory _QuestProposalType.fromJson(Map<String, dynamic> json) =
      _$_QuestProposalType.fromJson;

  @override
  String get id;
  @override
  QuestProposer get proposer;
  @override
  int get blockNumber;
  @override
  QuestProposalFile get file;
  @override
  ProposalStatus get status;
  @override
  int get questId;
  @override
  String get fileCID;
  @override
  String? get workCID;
  @override
  @JsonKey(ignore: true)
  _$$_QuestProposalTypeCopyWith<_$_QuestProposalType> get copyWith =>
      throw _privateConstructorUsedError;
}

QuestProposalFile _$QuestProposalFileFromJson(Map<String, dynamic> json) {
  return _QuestProposalFile.fromJson(json);
}

/// @nodoc
mixin _$QuestProposalFile {
  String get description => throw _privateConstructorUsedError;
  String get approxCompletionTime => throw _privateConstructorUsedError;
  String get cid => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $QuestProposalFileCopyWith<QuestProposalFile> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $QuestProposalFileCopyWith<$Res> {
  factory $QuestProposalFileCopyWith(
          QuestProposalFile value, $Res Function(QuestProposalFile) then) =
      _$QuestProposalFileCopyWithImpl<$Res, QuestProposalFile>;
  @useResult
  $Res call({String description, String approxCompletionTime, String cid});
}

/// @nodoc
class _$QuestProposalFileCopyWithImpl<$Res, $Val extends QuestProposalFile>
    implements $QuestProposalFileCopyWith<$Res> {
  _$QuestProposalFileCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? description = null,
    Object? approxCompletionTime = null,
    Object? cid = null,
  }) {
    return _then(_value.copyWith(
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      approxCompletionTime: null == approxCompletionTime
          ? _value.approxCompletionTime
          : approxCompletionTime // ignore: cast_nullable_to_non_nullable
              as String,
      cid: null == cid
          ? _value.cid
          : cid // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_QuestProposalFileCopyWith<$Res>
    implements $QuestProposalFileCopyWith<$Res> {
  factory _$$_QuestProposalFileCopyWith(_$_QuestProposalFile value,
          $Res Function(_$_QuestProposalFile) then) =
      __$$_QuestProposalFileCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String description, String approxCompletionTime, String cid});
}

/// @nodoc
class __$$_QuestProposalFileCopyWithImpl<$Res>
    extends _$QuestProposalFileCopyWithImpl<$Res, _$_QuestProposalFile>
    implements _$$_QuestProposalFileCopyWith<$Res> {
  __$$_QuestProposalFileCopyWithImpl(
      _$_QuestProposalFile _value, $Res Function(_$_QuestProposalFile) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? description = null,
    Object? approxCompletionTime = null,
    Object? cid = null,
  }) {
    return _then(_$_QuestProposalFile(
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      approxCompletionTime: null == approxCompletionTime
          ? _value.approxCompletionTime
          : approxCompletionTime // ignore: cast_nullable_to_non_nullable
              as String,
      cid: null == cid
          ? _value.cid
          : cid // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_QuestProposalFile implements _QuestProposalFile {
  const _$_QuestProposalFile(
      {required this.description,
      required this.approxCompletionTime,
      required this.cid});

  factory _$_QuestProposalFile.fromJson(Map<String, dynamic> json) =>
      _$$_QuestProposalFileFromJson(json);

  @override
  final String description;
  @override
  final String approxCompletionTime;
  @override
  final String cid;

  @override
  String toString() {
    return 'QuestProposalFile(description: $description, approxCompletionTime: $approxCompletionTime, cid: $cid)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_QuestProposalFile &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.approxCompletionTime, approxCompletionTime) ||
                other.approxCompletionTime == approxCompletionTime) &&
            (identical(other.cid, cid) || other.cid == cid));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, description, approxCompletionTime, cid);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_QuestProposalFileCopyWith<_$_QuestProposalFile> get copyWith =>
      __$$_QuestProposalFileCopyWithImpl<_$_QuestProposalFile>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_QuestProposalFileToJson(
      this,
    );
  }
}

abstract class _QuestProposalFile implements QuestProposalFile {
  const factory _QuestProposalFile(
      {required final String description,
      required final String approxCompletionTime,
      required final String cid}) = _$_QuestProposalFile;

  factory _QuestProposalFile.fromJson(Map<String, dynamic> json) =
      _$_QuestProposalFile.fromJson;

  @override
  String get description;
  @override
  String get approxCompletionTime;
  @override
  String get cid;
  @override
  @JsonKey(ignore: true)
  _$$_QuestProposalFileCopyWith<_$_QuestProposalFile> get copyWith =>
      throw _privateConstructorUsedError;
}

OrganizationModel _$OrganizationModelFromJson(Map<String, dynamic> json) {
  return _OrganizationModel.fromJson(json);
}

/// @nodoc
mixin _$OrganizationModel {
  int get id => throw _privateConstructorUsedError;
  String get admin => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get imageCID => throw _privateConstructorUsedError;
  String get imageURL => throw _privateConstructorUsedError;
  String get description => throw _privateConstructorUsedError;
  String get video => throw _privateConstructorUsedError;
  int get blockNumber => throw _privateConstructorUsedError;
  String get email => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $OrganizationModelCopyWith<OrganizationModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $OrganizationModelCopyWith<$Res> {
  factory $OrganizationModelCopyWith(
          OrganizationModel value, $Res Function(OrganizationModel) then) =
      _$OrganizationModelCopyWithImpl<$Res, OrganizationModel>;
  @useResult
  $Res call(
      {int id,
      String admin,
      String name,
      String imageCID,
      String imageURL,
      String description,
      String video,
      int blockNumber,
      String email});
}

/// @nodoc
class _$OrganizationModelCopyWithImpl<$Res, $Val extends OrganizationModel>
    implements $OrganizationModelCopyWith<$Res> {
  _$OrganizationModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? admin = null,
    Object? name = null,
    Object? imageCID = null,
    Object? imageURL = null,
    Object? description = null,
    Object? video = null,
    Object? blockNumber = null,
    Object? email = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int,
      admin: null == admin
          ? _value.admin
          : admin // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      imageCID: null == imageCID
          ? _value.imageCID
          : imageCID // ignore: cast_nullable_to_non_nullable
              as String,
      imageURL: null == imageURL
          ? _value.imageURL
          : imageURL // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      video: null == video
          ? _value.video
          : video // ignore: cast_nullable_to_non_nullable
              as String,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_OrganizationModelCopyWith<$Res>
    implements $OrganizationModelCopyWith<$Res> {
  factory _$$_OrganizationModelCopyWith(_$_OrganizationModel value,
          $Res Function(_$_OrganizationModel) then) =
      __$$_OrganizationModelCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {int id,
      String admin,
      String name,
      String imageCID,
      String imageURL,
      String description,
      String video,
      int blockNumber,
      String email});
}

/// @nodoc
class __$$_OrganizationModelCopyWithImpl<$Res>
    extends _$OrganizationModelCopyWithImpl<$Res, _$_OrganizationModel>
    implements _$$_OrganizationModelCopyWith<$Res> {
  __$$_OrganizationModelCopyWithImpl(
      _$_OrganizationModel _value, $Res Function(_$_OrganizationModel) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? admin = null,
    Object? name = null,
    Object? imageCID = null,
    Object? imageURL = null,
    Object? description = null,
    Object? video = null,
    Object? blockNumber = null,
    Object? email = null,
  }) {
    return _then(_$_OrganizationModel(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int,
      admin: null == admin
          ? _value.admin
          : admin // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      imageCID: null == imageCID
          ? _value.imageCID
          : imageCID // ignore: cast_nullable_to_non_nullable
              as String,
      imageURL: null == imageURL
          ? _value.imageURL
          : imageURL // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      video: null == video
          ? _value.video
          : video // ignore: cast_nullable_to_non_nullable
              as String,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_OrganizationModel implements _OrganizationModel {
  const _$_OrganizationModel(
      {required this.id,
      required this.admin,
      required this.name,
      required this.imageCID,
      required this.imageURL,
      required this.description,
      required this.video,
      required this.blockNumber,
      required this.email});

  factory _$_OrganizationModel.fromJson(Map<String, dynamic> json) =>
      _$$_OrganizationModelFromJson(json);

  @override
  final int id;
  @override
  final String admin;
  @override
  final String name;
  @override
  final String imageCID;
  @override
  final String imageURL;
  @override
  final String description;
  @override
  final String video;
  @override
  final int blockNumber;
  @override
  final String email;

  @override
  String toString() {
    return 'OrganizationModel(id: $id, admin: $admin, name: $name, imageCID: $imageCID, imageURL: $imageURL, description: $description, video: $video, blockNumber: $blockNumber, email: $email)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_OrganizationModel &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.admin, admin) || other.admin == admin) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.imageCID, imageCID) ||
                other.imageCID == imageCID) &&
            (identical(other.imageURL, imageURL) ||
                other.imageURL == imageURL) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.video, video) || other.video == video) &&
            (identical(other.blockNumber, blockNumber) ||
                other.blockNumber == blockNumber) &&
            (identical(other.email, email) || other.email == email));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, admin, name, imageCID,
      imageURL, description, video, blockNumber, email);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_OrganizationModelCopyWith<_$_OrganizationModel> get copyWith =>
      __$$_OrganizationModelCopyWithImpl<_$_OrganizationModel>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_OrganizationModelToJson(
      this,
    );
  }
}

abstract class _OrganizationModel implements OrganizationModel {
  const factory _OrganizationModel(
      {required final int id,
      required final String admin,
      required final String name,
      required final String imageCID,
      required final String imageURL,
      required final String description,
      required final String video,
      required final int blockNumber,
      required final String email}) = _$_OrganizationModel;

  factory _OrganizationModel.fromJson(Map<String, dynamic> json) =
      _$_OrganizationModel.fromJson;

  @override
  int get id;
  @override
  String get admin;
  @override
  String get name;
  @override
  String get imageCID;
  @override
  String get imageURL;
  @override
  String get description;
  @override
  String get video;
  @override
  int get blockNumber;
  @override
  String get email;
  @override
  @JsonKey(ignore: true)
  _$$_OrganizationModelCopyWith<_$_OrganizationModel> get copyWith =>
      throw _privateConstructorUsedError;
}

QuestModel _$QuestModelFromJson(Map<String, dynamic> json) {
  return _QuestModel.fromJson(json);
}

/// @nodoc
mixin _$QuestModel {
  String get id => throw _privateConstructorUsedError;
  String get value => throw _privateConstructorUsedError;
  ProposalStatus get status => throw _privateConstructorUsedError;
  String get questCID => throw _privateConstructorUsedError;
  int get orgId => throw _privateConstructorUsedError;
  String get deadline => throw _privateConstructorUsedError;
  int get blockNumber => throw _privateConstructorUsedError;
  OrganizationModel get org => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $QuestModelCopyWith<QuestModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $QuestModelCopyWith<$Res> {
  factory $QuestModelCopyWith(
          QuestModel value, $Res Function(QuestModel) then) =
      _$QuestModelCopyWithImpl<$Res, QuestModel>;
  @useResult
  $Res call(
      {String id,
      String value,
      ProposalStatus status,
      String questCID,
      int orgId,
      String deadline,
      int blockNumber,
      OrganizationModel org});

  $OrganizationModelCopyWith<$Res> get org;
}

/// @nodoc
class _$QuestModelCopyWithImpl<$Res, $Val extends QuestModel>
    implements $QuestModelCopyWith<$Res> {
  _$QuestModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? value = null,
    Object? status = null,
    Object? questCID = null,
    Object? orgId = null,
    Object? deadline = null,
    Object? blockNumber = null,
    Object? org = null,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      value: null == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as String,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ProposalStatus,
      questCID: null == questCID
          ? _value.questCID
          : questCID // ignore: cast_nullable_to_non_nullable
              as String,
      orgId: null == orgId
          ? _value.orgId
          : orgId // ignore: cast_nullable_to_non_nullable
              as int,
      deadline: null == deadline
          ? _value.deadline
          : deadline // ignore: cast_nullable_to_non_nullable
              as String,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      org: null == org
          ? _value.org
          : org // ignore: cast_nullable_to_non_nullable
              as OrganizationModel,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $OrganizationModelCopyWith<$Res> get org {
    return $OrganizationModelCopyWith<$Res>(_value.org, (value) {
      return _then(_value.copyWith(org: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_QuestModelCopyWith<$Res>
    implements $QuestModelCopyWith<$Res> {
  factory _$$_QuestModelCopyWith(
          _$_QuestModel value, $Res Function(_$_QuestModel) then) =
      __$$_QuestModelCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      String value,
      ProposalStatus status,
      String questCID,
      int orgId,
      String deadline,
      int blockNumber,
      OrganizationModel org});

  @override
  $OrganizationModelCopyWith<$Res> get org;
}

/// @nodoc
class __$$_QuestModelCopyWithImpl<$Res>
    extends _$QuestModelCopyWithImpl<$Res, _$_QuestModel>
    implements _$$_QuestModelCopyWith<$Res> {
  __$$_QuestModelCopyWithImpl(
      _$_QuestModel _value, $Res Function(_$_QuestModel) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? value = null,
    Object? status = null,
    Object? questCID = null,
    Object? orgId = null,
    Object? deadline = null,
    Object? blockNumber = null,
    Object? org = null,
  }) {
    return _then(_$_QuestModel(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      value: null == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as String,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ProposalStatus,
      questCID: null == questCID
          ? _value.questCID
          : questCID // ignore: cast_nullable_to_non_nullable
              as String,
      orgId: null == orgId
          ? _value.orgId
          : orgId // ignore: cast_nullable_to_non_nullable
              as int,
      deadline: null == deadline
          ? _value.deadline
          : deadline // ignore: cast_nullable_to_non_nullable
              as String,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      org: null == org
          ? _value.org
          : org // ignore: cast_nullable_to_non_nullable
              as OrganizationModel,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_QuestModel implements _QuestModel {
  const _$_QuestModel(
      {required this.id,
      required this.value,
      required this.status,
      required this.questCID,
      required this.orgId,
      required this.deadline,
      required this.blockNumber,
      required this.org});

  factory _$_QuestModel.fromJson(Map<String, dynamic> json) =>
      _$$_QuestModelFromJson(json);

  @override
  final String id;
  @override
  final String value;
  @override
  final ProposalStatus status;
  @override
  final String questCID;
  @override
  final int orgId;
  @override
  final String deadline;
  @override
  final int blockNumber;
  @override
  final OrganizationModel org;

  @override
  String toString() {
    return 'QuestModel(id: $id, value: $value, status: $status, questCID: $questCID, orgId: $orgId, deadline: $deadline, blockNumber: $blockNumber, org: $org)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_QuestModel &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.value, value) || other.value == value) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.questCID, questCID) ||
                other.questCID == questCID) &&
            (identical(other.orgId, orgId) || other.orgId == orgId) &&
            (identical(other.deadline, deadline) ||
                other.deadline == deadline) &&
            (identical(other.blockNumber, blockNumber) ||
                other.blockNumber == blockNumber) &&
            (identical(other.org, org) || other.org == org));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, value, status, questCID,
      orgId, deadline, blockNumber, org);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_QuestModelCopyWith<_$_QuestModel> get copyWith =>
      __$$_QuestModelCopyWithImpl<_$_QuestModel>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_QuestModelToJson(
      this,
    );
  }
}

abstract class _QuestModel implements QuestModel {
  const factory _QuestModel(
      {required final String id,
      required final String value,
      required final ProposalStatus status,
      required final String questCID,
      required final int orgId,
      required final String deadline,
      required final int blockNumber,
      required final OrganizationModel org}) = _$_QuestModel;

  factory _QuestModel.fromJson(Map<String, dynamic> json) =
      _$_QuestModel.fromJson;

  @override
  String get id;
  @override
  String get value;
  @override
  ProposalStatus get status;
  @override
  String get questCID;
  @override
  int get orgId;
  @override
  String get deadline;
  @override
  int get blockNumber;
  @override
  OrganizationModel get org;
  @override
  @JsonKey(ignore: true)
  _$$_QuestModelCopyWith<_$_QuestModel> get copyWith =>
      throw _privateConstructorUsedError;
}

LancerProposal _$LancerProposalFromJson(Map<String, dynamic> json) {
  return _LancerProposal.fromJson(json);
}

/// @nodoc
mixin _$LancerProposal {
  String get id => throw _privateConstructorUsedError;
  QuestModel get quest => throw _privateConstructorUsedError;
  String get proposer => throw _privateConstructorUsedError;
  int get blockNumber => throw _privateConstructorUsedError;
  QuestProposalFile get file => throw _privateConstructorUsedError;
  ProposalStatus get status => throw _privateConstructorUsedError;
  String get questId => throw _privateConstructorUsedError;
  String get fileCID => throw _privateConstructorUsedError;
  String? get workCID => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $LancerProposalCopyWith<LancerProposal> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $LancerProposalCopyWith<$Res> {
  factory $LancerProposalCopyWith(
          LancerProposal value, $Res Function(LancerProposal) then) =
      _$LancerProposalCopyWithImpl<$Res, LancerProposal>;
  @useResult
  $Res call(
      {String id,
      QuestModel quest,
      String proposer,
      int blockNumber,
      QuestProposalFile file,
      ProposalStatus status,
      String questId,
      String fileCID,
      String? workCID});

  $QuestModelCopyWith<$Res> get quest;
  $QuestProposalFileCopyWith<$Res> get file;
}

/// @nodoc
class _$LancerProposalCopyWithImpl<$Res, $Val extends LancerProposal>
    implements $LancerProposalCopyWith<$Res> {
  _$LancerProposalCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? quest = null,
    Object? proposer = null,
    Object? blockNumber = null,
    Object? file = null,
    Object? status = null,
    Object? questId = null,
    Object? fileCID = null,
    Object? workCID = freezed,
  }) {
    return _then(_value.copyWith(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      quest: null == quest
          ? _value.quest
          : quest // ignore: cast_nullable_to_non_nullable
              as QuestModel,
      proposer: null == proposer
          ? _value.proposer
          : proposer // ignore: cast_nullable_to_non_nullable
              as String,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      file: null == file
          ? _value.file
          : file // ignore: cast_nullable_to_non_nullable
              as QuestProposalFile,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ProposalStatus,
      questId: null == questId
          ? _value.questId
          : questId // ignore: cast_nullable_to_non_nullable
              as String,
      fileCID: null == fileCID
          ? _value.fileCID
          : fileCID // ignore: cast_nullable_to_non_nullable
              as String,
      workCID: freezed == workCID
          ? _value.workCID
          : workCID // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $QuestModelCopyWith<$Res> get quest {
    return $QuestModelCopyWith<$Res>(_value.quest, (value) {
      return _then(_value.copyWith(quest: value) as $Val);
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $QuestProposalFileCopyWith<$Res> get file {
    return $QuestProposalFileCopyWith<$Res>(_value.file, (value) {
      return _then(_value.copyWith(file: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_LancerProposalCopyWith<$Res>
    implements $LancerProposalCopyWith<$Res> {
  factory _$$_LancerProposalCopyWith(
          _$_LancerProposal value, $Res Function(_$_LancerProposal) then) =
      __$$_LancerProposalCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String id,
      QuestModel quest,
      String proposer,
      int blockNumber,
      QuestProposalFile file,
      ProposalStatus status,
      String questId,
      String fileCID,
      String? workCID});

  @override
  $QuestModelCopyWith<$Res> get quest;
  @override
  $QuestProposalFileCopyWith<$Res> get file;
}

/// @nodoc
class __$$_LancerProposalCopyWithImpl<$Res>
    extends _$LancerProposalCopyWithImpl<$Res, _$_LancerProposal>
    implements _$$_LancerProposalCopyWith<$Res> {
  __$$_LancerProposalCopyWithImpl(
      _$_LancerProposal _value, $Res Function(_$_LancerProposal) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? id = null,
    Object? quest = null,
    Object? proposer = null,
    Object? blockNumber = null,
    Object? file = null,
    Object? status = null,
    Object? questId = null,
    Object? fileCID = null,
    Object? workCID = freezed,
  }) {
    return _then(_$_LancerProposal(
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as String,
      quest: null == quest
          ? _value.quest
          : quest // ignore: cast_nullable_to_non_nullable
              as QuestModel,
      proposer: null == proposer
          ? _value.proposer
          : proposer // ignore: cast_nullable_to_non_nullable
              as String,
      blockNumber: null == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int,
      file: null == file
          ? _value.file
          : file // ignore: cast_nullable_to_non_nullable
              as QuestProposalFile,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as ProposalStatus,
      questId: null == questId
          ? _value.questId
          : questId // ignore: cast_nullable_to_non_nullable
              as String,
      fileCID: null == fileCID
          ? _value.fileCID
          : fileCID // ignore: cast_nullable_to_non_nullable
              as String,
      workCID: freezed == workCID
          ? _value.workCID
          : workCID // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_LancerProposal implements _LancerProposal {
  const _$_LancerProposal(
      {required this.id,
      required this.quest,
      required this.proposer,
      required this.blockNumber,
      required this.file,
      required this.status,
      required this.questId,
      required this.fileCID,
      this.workCID});

  factory _$_LancerProposal.fromJson(Map<String, dynamic> json) =>
      _$$_LancerProposalFromJson(json);

  @override
  final String id;
  @override
  final QuestModel quest;
  @override
  final String proposer;
  @override
  final int blockNumber;
  @override
  final QuestProposalFile file;
  @override
  final ProposalStatus status;
  @override
  final String questId;
  @override
  final String fileCID;
  @override
  final String? workCID;

  @override
  String toString() {
    return 'LancerProposal(id: $id, quest: $quest, proposer: $proposer, blockNumber: $blockNumber, file: $file, status: $status, questId: $questId, fileCID: $fileCID, workCID: $workCID)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_LancerProposal &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.quest, quest) || other.quest == quest) &&
            (identical(other.proposer, proposer) ||
                other.proposer == proposer) &&
            (identical(other.blockNumber, blockNumber) ||
                other.blockNumber == blockNumber) &&
            (identical(other.file, file) || other.file == file) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.questId, questId) || other.questId == questId) &&
            (identical(other.fileCID, fileCID) || other.fileCID == fileCID) &&
            (identical(other.workCID, workCID) || other.workCID == workCID));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, id, quest, proposer, blockNumber,
      file, status, questId, fileCID, workCID);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LancerProposalCopyWith<_$_LancerProposal> get copyWith =>
      __$$_LancerProposalCopyWithImpl<_$_LancerProposal>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_LancerProposalToJson(
      this,
    );
  }
}

abstract class _LancerProposal implements LancerProposal {
  const factory _LancerProposal(
      {required final String id,
      required final QuestModel quest,
      required final String proposer,
      required final int blockNumber,
      required final QuestProposalFile file,
      required final ProposalStatus status,
      required final String questId,
      required final String fileCID,
      final String? workCID}) = _$_LancerProposal;

  factory _LancerProposal.fromJson(Map<String, dynamic> json) =
      _$_LancerProposal.fromJson;

  @override
  String get id;
  @override
  QuestModel get quest;
  @override
  String get proposer;
  @override
  int get blockNumber;
  @override
  QuestProposalFile get file;
  @override
  ProposalStatus get status;
  @override
  String get questId;
  @override
  String get fileCID;
  @override
  String? get workCID;
  @override
  @JsonKey(ignore: true)
  _$$_LancerProposalCopyWith<_$_LancerProposal> get copyWith =>
      throw _privateConstructorUsedError;
}

QuestProposer _$QuestProposerFromJson(Map<String, dynamic> json) {
  return _QuestProposer.fromJson(json);
}

/// @nodoc
mixin _$QuestProposer {
  String get address => throw _privateConstructorUsedError;
  String get name => throw _privateConstructorUsedError;
  String get email => throw _privateConstructorUsedError;
  String get description => throw _privateConstructorUsedError;
  String get imageCID => throw _privateConstructorUsedError;
  String get nonce => throw _privateConstructorUsedError;
  bool get registered => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $QuestProposerCopyWith<QuestProposer> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $QuestProposerCopyWith<$Res> {
  factory $QuestProposerCopyWith(
          QuestProposer value, $Res Function(QuestProposer) then) =
      _$QuestProposerCopyWithImpl<$Res, QuestProposer>;
  @useResult
  $Res call(
      {String address,
      String name,
      String email,
      String description,
      String imageCID,
      String nonce,
      bool registered});
}

/// @nodoc
class _$QuestProposerCopyWithImpl<$Res, $Val extends QuestProposer>
    implements $QuestProposerCopyWith<$Res> {
  _$QuestProposerCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? address = null,
    Object? name = null,
    Object? email = null,
    Object? description = null,
    Object? imageCID = null,
    Object? nonce = null,
    Object? registered = null,
  }) {
    return _then(_value.copyWith(
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      imageCID: null == imageCID
          ? _value.imageCID
          : imageCID // ignore: cast_nullable_to_non_nullable
              as String,
      nonce: null == nonce
          ? _value.nonce
          : nonce // ignore: cast_nullable_to_non_nullable
              as String,
      registered: null == registered
          ? _value.registered
          : registered // ignore: cast_nullable_to_non_nullable
              as bool,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_QuestProposerCopyWith<$Res>
    implements $QuestProposerCopyWith<$Res> {
  factory _$$_QuestProposerCopyWith(
          _$_QuestProposer value, $Res Function(_$_QuestProposer) then) =
      __$$_QuestProposerCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String address,
      String name,
      String email,
      String description,
      String imageCID,
      String nonce,
      bool registered});
}

/// @nodoc
class __$$_QuestProposerCopyWithImpl<$Res>
    extends _$QuestProposerCopyWithImpl<$Res, _$_QuestProposer>
    implements _$$_QuestProposerCopyWith<$Res> {
  __$$_QuestProposerCopyWithImpl(
      _$_QuestProposer _value, $Res Function(_$_QuestProposer) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? address = null,
    Object? name = null,
    Object? email = null,
    Object? description = null,
    Object? imageCID = null,
    Object? nonce = null,
    Object? registered = null,
  }) {
    return _then(_$_QuestProposer(
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
              as String,
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      email: null == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      imageCID: null == imageCID
          ? _value.imageCID
          : imageCID // ignore: cast_nullable_to_non_nullable
              as String,
      nonce: null == nonce
          ? _value.nonce
          : nonce // ignore: cast_nullable_to_non_nullable
              as String,
      registered: null == registered
          ? _value.registered
          : registered // ignore: cast_nullable_to_non_nullable
              as bool,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_QuestProposer implements _QuestProposer {
  const _$_QuestProposer(
      {required this.address,
      required this.name,
      required this.email,
      required this.description,
      required this.imageCID,
      required this.nonce,
      required this.registered});

  factory _$_QuestProposer.fromJson(Map<String, dynamic> json) =>
      _$$_QuestProposerFromJson(json);

  @override
  final String address;
  @override
  final String name;
  @override
  final String email;
  @override
  final String description;
  @override
  final String imageCID;
  @override
  final String nonce;
  @override
  final bool registered;

  @override
  String toString() {
    return 'QuestProposer(address: $address, name: $name, email: $email, description: $description, imageCID: $imageCID, nonce: $nonce, registered: $registered)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_QuestProposer &&
            (identical(other.address, address) || other.address == address) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.imageCID, imageCID) ||
                other.imageCID == imageCID) &&
            (identical(other.nonce, nonce) || other.nonce == nonce) &&
            (identical(other.registered, registered) ||
                other.registered == registered));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, address, name, email,
      description, imageCID, nonce, registered);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_QuestProposerCopyWith<_$_QuestProposer> get copyWith =>
      __$$_QuestProposerCopyWithImpl<_$_QuestProposer>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_QuestProposerToJson(
      this,
    );
  }
}

abstract class _QuestProposer implements QuestProposer {
  const factory _QuestProposer(
      {required final String address,
      required final String name,
      required final String email,
      required final String description,
      required final String imageCID,
      required final String nonce,
      required final bool registered}) = _$_QuestProposer;

  factory _QuestProposer.fromJson(Map<String, dynamic> json) =
      _$_QuestProposer.fromJson;

  @override
  String get address;
  @override
  String get name;
  @override
  String get email;
  @override
  String get description;
  @override
  String get imageCID;
  @override
  String get nonce;
  @override
  bool get registered;
  @override
  @JsonKey(ignore: true)
  _$$_QuestProposerCopyWith<_$_QuestProposer> get copyWith =>
      throw _privateConstructorUsedError;
}
