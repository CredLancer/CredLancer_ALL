// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'org_response.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

OrgResponse _$OrgResponseFromJson(Map<String, dynamic> json) {
  return _OrgResponse.fromJson(json);
}

/// @nodoc
mixin _$OrgResponse {
  String get signature => throw _privateConstructorUsedError;
  String get nonce => throw _privateConstructorUsedError;
  String? get imageCID => throw _privateConstructorUsedError;
  String? get name => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $OrgResponseCopyWith<OrgResponse> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $OrgResponseCopyWith<$Res> {
  factory $OrgResponseCopyWith(
          OrgResponse value, $Res Function(OrgResponse) then) =
      _$OrgResponseCopyWithImpl<$Res, OrgResponse>;
  @useResult
  $Res call({String signature, String nonce, String? imageCID, String? name});
}

/// @nodoc
class _$OrgResponseCopyWithImpl<$Res, $Val extends OrgResponse>
    implements $OrgResponseCopyWith<$Res> {
  _$OrgResponseCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? signature = null,
    Object? nonce = null,
    Object? imageCID = freezed,
    Object? name = freezed,
  }) {
    return _then(_value.copyWith(
      signature: null == signature
          ? _value.signature
          : signature // ignore: cast_nullable_to_non_nullable
              as String,
      nonce: null == nonce
          ? _value.nonce
          : nonce // ignore: cast_nullable_to_non_nullable
              as String,
      imageCID: freezed == imageCID
          ? _value.imageCID
          : imageCID // ignore: cast_nullable_to_non_nullable
              as String?,
      name: freezed == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_OrgResponseCopyWith<$Res>
    implements $OrgResponseCopyWith<$Res> {
  factory _$$_OrgResponseCopyWith(
          _$_OrgResponse value, $Res Function(_$_OrgResponse) then) =
      __$$_OrgResponseCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String signature, String nonce, String? imageCID, String? name});
}

/// @nodoc
class __$$_OrgResponseCopyWithImpl<$Res>
    extends _$OrgResponseCopyWithImpl<$Res, _$_OrgResponse>
    implements _$$_OrgResponseCopyWith<$Res> {
  __$$_OrgResponseCopyWithImpl(
      _$_OrgResponse _value, $Res Function(_$_OrgResponse) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? signature = null,
    Object? nonce = null,
    Object? imageCID = freezed,
    Object? name = freezed,
  }) {
    return _then(_$_OrgResponse(
      signature: null == signature
          ? _value.signature
          : signature // ignore: cast_nullable_to_non_nullable
              as String,
      nonce: null == nonce
          ? _value.nonce
          : nonce // ignore: cast_nullable_to_non_nullable
              as String,
      imageCID: freezed == imageCID
          ? _value.imageCID
          : imageCID // ignore: cast_nullable_to_non_nullable
              as String?,
      name: freezed == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_OrgResponse implements _OrgResponse {
  const _$_OrgResponse(
      {required this.signature, required this.nonce, this.imageCID, this.name});

  factory _$_OrgResponse.fromJson(Map<String, dynamic> json) =>
      _$$_OrgResponseFromJson(json);

  @override
  final String signature;
  @override
  final String nonce;
  @override
  final String? imageCID;
  @override
  final String? name;

  @override
  String toString() {
    return 'OrgResponse(signature: $signature, nonce: $nonce, imageCID: $imageCID, name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_OrgResponse &&
            (identical(other.signature, signature) ||
                other.signature == signature) &&
            (identical(other.nonce, nonce) || other.nonce == nonce) &&
            (identical(other.imageCID, imageCID) ||
                other.imageCID == imageCID) &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, signature, nonce, imageCID, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_OrgResponseCopyWith<_$_OrgResponse> get copyWith =>
      __$$_OrgResponseCopyWithImpl<_$_OrgResponse>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_OrgResponseToJson(
      this,
    );
  }
}

abstract class _OrgResponse implements OrgResponse {
  const factory _OrgResponse(
      {required final String signature,
      required final String nonce,
      final String? imageCID,
      final String? name}) = _$_OrgResponse;

  factory _OrgResponse.fromJson(Map<String, dynamic> json) =
      _$_OrgResponse.fromJson;

  @override
  String get signature;
  @override
  String get nonce;
  @override
  String? get imageCID;
  @override
  String? get name;
  @override
  @JsonKey(ignore: true)
  _$$_OrgResponseCopyWith<_$_OrgResponse> get copyWith =>
      throw _privateConstructorUsedError;
}
