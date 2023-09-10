// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'quest.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

QuestResponse _$QuestResponseFromJson(Map<String, dynamic> json) {
  return _QuestResponse.fromJson(json);
}

/// @nodoc
mixin _$QuestResponse {
  String get title => throw _privateConstructorUsedError;
  String get description => throw _privateConstructorUsedError;
  String get image => throw _privateConstructorUsedError;
  int get id => throw _privateConstructorUsedError;
  String get questCID => throw _privateConstructorUsedError;
  String get status => throw _privateConstructorUsedError;
  int get orgId => throw _privateConstructorUsedError;
  int get value => throw _privateConstructorUsedError;
  int? get blockNumber => throw _privateConstructorUsedError;
  int? get deadline => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $QuestResponseCopyWith<QuestResponse> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $QuestResponseCopyWith<$Res> {
  factory $QuestResponseCopyWith(
          QuestResponse value, $Res Function(QuestResponse) then) =
      _$QuestResponseCopyWithImpl<$Res, QuestResponse>;
  @useResult
  $Res call(
      {String title,
      String description,
      String image,
      int id,
      String questCID,
      String status,
      int orgId,
      int value,
      int? blockNumber,
      int? deadline});
}

/// @nodoc
class _$QuestResponseCopyWithImpl<$Res, $Val extends QuestResponse>
    implements $QuestResponseCopyWith<$Res> {
  _$QuestResponseCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? title = null,
    Object? description = null,
    Object? image = null,
    Object? id = null,
    Object? questCID = null,
    Object? status = null,
    Object? orgId = null,
    Object? value = null,
    Object? blockNumber = freezed,
    Object? deadline = freezed,
  }) {
    return _then(_value.copyWith(
      title: null == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      image: null == image
          ? _value.image
          : image // ignore: cast_nullable_to_non_nullable
              as String,
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int,
      questCID: null == questCID
          ? _value.questCID
          : questCID // ignore: cast_nullable_to_non_nullable
              as String,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
      orgId: null == orgId
          ? _value.orgId
          : orgId // ignore: cast_nullable_to_non_nullable
              as int,
      value: null == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as int,
      blockNumber: freezed == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int?,
      deadline: freezed == deadline
          ? _value.deadline
          : deadline // ignore: cast_nullable_to_non_nullable
              as int?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_QuestResponseCopyWith<$Res>
    implements $QuestResponseCopyWith<$Res> {
  factory _$$_QuestResponseCopyWith(
          _$_QuestResponse value, $Res Function(_$_QuestResponse) then) =
      __$$_QuestResponseCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String title,
      String description,
      String image,
      int id,
      String questCID,
      String status,
      int orgId,
      int value,
      int? blockNumber,
      int? deadline});
}

/// @nodoc
class __$$_QuestResponseCopyWithImpl<$Res>
    extends _$QuestResponseCopyWithImpl<$Res, _$_QuestResponse>
    implements _$$_QuestResponseCopyWith<$Res> {
  __$$_QuestResponseCopyWithImpl(
      _$_QuestResponse _value, $Res Function(_$_QuestResponse) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? title = null,
    Object? description = null,
    Object? image = null,
    Object? id = null,
    Object? questCID = null,
    Object? status = null,
    Object? orgId = null,
    Object? value = null,
    Object? blockNumber = freezed,
    Object? deadline = freezed,
  }) {
    return _then(_$_QuestResponse(
      title: null == title
          ? _value.title
          : title // ignore: cast_nullable_to_non_nullable
              as String,
      description: null == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String,
      image: null == image
          ? _value.image
          : image // ignore: cast_nullable_to_non_nullable
              as String,
      id: null == id
          ? _value.id
          : id // ignore: cast_nullable_to_non_nullable
              as int,
      questCID: null == questCID
          ? _value.questCID
          : questCID // ignore: cast_nullable_to_non_nullable
              as String,
      status: null == status
          ? _value.status
          : status // ignore: cast_nullable_to_non_nullable
              as String,
      orgId: null == orgId
          ? _value.orgId
          : orgId // ignore: cast_nullable_to_non_nullable
              as int,
      value: null == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as int,
      blockNumber: freezed == blockNumber
          ? _value.blockNumber
          : blockNumber // ignore: cast_nullable_to_non_nullable
              as int?,
      deadline: freezed == deadline
          ? _value.deadline
          : deadline // ignore: cast_nullable_to_non_nullable
              as int?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_QuestResponse implements _QuestResponse {
  const _$_QuestResponse(
      {required this.title,
      required this.description,
      required this.image,
      required this.id,
      required this.questCID,
      required this.status,
      required this.orgId,
      required this.value,
      this.blockNumber,
      this.deadline});

  factory _$_QuestResponse.fromJson(Map<String, dynamic> json) =>
      _$$_QuestResponseFromJson(json);

  @override
  final String title;
  @override
  final String description;
  @override
  final String image;
  @override
  final int id;
  @override
  final String questCID;
  @override
  final String status;
  @override
  final int orgId;
  @override
  final int value;
  @override
  final int? blockNumber;
  @override
  final int? deadline;

  @override
  String toString() {
    return 'QuestResponse(title: $title, description: $description, image: $image, id: $id, questCID: $questCID, status: $status, orgId: $orgId, value: $value, blockNumber: $blockNumber, deadline: $deadline)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_QuestResponse &&
            (identical(other.title, title) || other.title == title) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.image, image) || other.image == image) &&
            (identical(other.id, id) || other.id == id) &&
            (identical(other.questCID, questCID) ||
                other.questCID == questCID) &&
            (identical(other.status, status) || other.status == status) &&
            (identical(other.orgId, orgId) || other.orgId == orgId) &&
            (identical(other.value, value) || other.value == value) &&
            (identical(other.blockNumber, blockNumber) ||
                other.blockNumber == blockNumber) &&
            (identical(other.deadline, deadline) ||
                other.deadline == deadline));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, title, description, image, id,
      questCID, status, orgId, value, blockNumber, deadline);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_QuestResponseCopyWith<_$_QuestResponse> get copyWith =>
      __$$_QuestResponseCopyWithImpl<_$_QuestResponse>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_QuestResponseToJson(
      this,
    );
  }
}

abstract class _QuestResponse implements QuestResponse {
  const factory _QuestResponse(
      {required final String title,
      required final String description,
      required final String image,
      required final int id,
      required final String questCID,
      required final String status,
      required final int orgId,
      required final int value,
      final int? blockNumber,
      final int? deadline}) = _$_QuestResponse;

  factory _QuestResponse.fromJson(Map<String, dynamic> json) =
      _$_QuestResponse.fromJson;

  @override
  String get title;
  @override
  String get description;
  @override
  String get image;
  @override
  int get id;
  @override
  String get questCID;
  @override
  String get status;
  @override
  int get orgId;
  @override
  int get value;
  @override
  int? get blockNumber;
  @override
  int? get deadline;
  @override
  @JsonKey(ignore: true)
  _$$_QuestResponseCopyWith<_$_QuestResponse> get copyWith =>
      throw _privateConstructorUsedError;
}
