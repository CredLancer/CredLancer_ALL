// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'lancer.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

LancerSignatureProfile _$LancerSignatureProfileFromJson(
    Map<String, dynamic> json) {
  return _LancerSignatureProfile.fromJson(json);
}

/// @nodoc
mixin _$LancerSignatureProfile {
  bool get registered => throw _privateConstructorUsedError;
  String? get message => throw _privateConstructorUsedError;
  LancerModel? get lancer => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $LancerSignatureProfileCopyWith<LancerSignatureProfile> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $LancerSignatureProfileCopyWith<$Res> {
  factory $LancerSignatureProfileCopyWith(LancerSignatureProfile value,
          $Res Function(LancerSignatureProfile) then) =
      _$LancerSignatureProfileCopyWithImpl<$Res, LancerSignatureProfile>;
  @useResult
  $Res call({bool registered, String? message, LancerModel? lancer});

  $LancerModelCopyWith<$Res>? get lancer;
}

/// @nodoc
class _$LancerSignatureProfileCopyWithImpl<$Res,
        $Val extends LancerSignatureProfile>
    implements $LancerSignatureProfileCopyWith<$Res> {
  _$LancerSignatureProfileCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? registered = null,
    Object? message = freezed,
    Object? lancer = freezed,
  }) {
    return _then(_value.copyWith(
      registered: null == registered
          ? _value.registered
          : registered // ignore: cast_nullable_to_non_nullable
              as bool,
      message: freezed == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String?,
      lancer: freezed == lancer
          ? _value.lancer
          : lancer // ignore: cast_nullable_to_non_nullable
              as LancerModel?,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $LancerModelCopyWith<$Res>? get lancer {
    if (_value.lancer == null) {
      return null;
    }

    return $LancerModelCopyWith<$Res>(_value.lancer!, (value) {
      return _then(_value.copyWith(lancer: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_LancerSignatureProfileCopyWith<$Res>
    implements $LancerSignatureProfileCopyWith<$Res> {
  factory _$$_LancerSignatureProfileCopyWith(_$_LancerSignatureProfile value,
          $Res Function(_$_LancerSignatureProfile) then) =
      __$$_LancerSignatureProfileCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({bool registered, String? message, LancerModel? lancer});

  @override
  $LancerModelCopyWith<$Res>? get lancer;
}

/// @nodoc
class __$$_LancerSignatureProfileCopyWithImpl<$Res>
    extends _$LancerSignatureProfileCopyWithImpl<$Res,
        _$_LancerSignatureProfile>
    implements _$$_LancerSignatureProfileCopyWith<$Res> {
  __$$_LancerSignatureProfileCopyWithImpl(_$_LancerSignatureProfile _value,
      $Res Function(_$_LancerSignatureProfile) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? registered = null,
    Object? message = freezed,
    Object? lancer = freezed,
  }) {
    return _then(_$_LancerSignatureProfile(
      registered: null == registered
          ? _value.registered
          : registered // ignore: cast_nullable_to_non_nullable
              as bool,
      message: freezed == message
          ? _value.message
          : message // ignore: cast_nullable_to_non_nullable
              as String?,
      lancer: freezed == lancer
          ? _value.lancer
          : lancer // ignore: cast_nullable_to_non_nullable
              as LancerModel?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_LancerSignatureProfile implements _LancerSignatureProfile {
  const _$_LancerSignatureProfile(
      {required this.registered, this.message, this.lancer});

  factory _$_LancerSignatureProfile.fromJson(Map<String, dynamic> json) =>
      _$$_LancerSignatureProfileFromJson(json);

  @override
  final bool registered;
  @override
  final String? message;
  @override
  final LancerModel? lancer;

  @override
  String toString() {
    return 'LancerSignatureProfile(registered: $registered, message: $message, lancer: $lancer)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_LancerSignatureProfile &&
            (identical(other.registered, registered) ||
                other.registered == registered) &&
            (identical(other.message, message) || other.message == message) &&
            (identical(other.lancer, lancer) || other.lancer == lancer));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, registered, message, lancer);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LancerSignatureProfileCopyWith<_$_LancerSignatureProfile> get copyWith =>
      __$$_LancerSignatureProfileCopyWithImpl<_$_LancerSignatureProfile>(
          this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_LancerSignatureProfileToJson(
      this,
    );
  }
}

abstract class _LancerSignatureProfile implements LancerSignatureProfile {
  const factory _LancerSignatureProfile(
      {required final bool registered,
      final String? message,
      final LancerModel? lancer}) = _$_LancerSignatureProfile;

  factory _LancerSignatureProfile.fromJson(Map<String, dynamic> json) =
      _$_LancerSignatureProfile.fromJson;

  @override
  bool get registered;
  @override
  String? get message;
  @override
  LancerModel? get lancer;
  @override
  @JsonKey(ignore: true)
  _$$_LancerSignatureProfileCopyWith<_$_LancerSignatureProfile> get copyWith =>
      throw _privateConstructorUsedError;
}

LancerModel _$LancerModelFromJson(Map<String, dynamic> json) {
  return _LancerModel.fromJson(json);
}

/// @nodoc
mixin _$LancerModel {
  String get address => throw _privateConstructorUsedError;
  String get nonce => throw _privateConstructorUsedError;
  String? get imageCID => throw _privateConstructorUsedError;
  String? get name => throw _privateConstructorUsedError;
  String? get email => throw _privateConstructorUsedError;
  String? get description => throw _privateConstructorUsedError;
  bool get registered => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $LancerModelCopyWith<LancerModel> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $LancerModelCopyWith<$Res> {
  factory $LancerModelCopyWith(
          LancerModel value, $Res Function(LancerModel) then) =
      _$LancerModelCopyWithImpl<$Res, LancerModel>;
  @useResult
  $Res call(
      {String address,
      String nonce,
      String? imageCID,
      String? name,
      String? email,
      String? description,
      bool registered});
}

/// @nodoc
class _$LancerModelCopyWithImpl<$Res, $Val extends LancerModel>
    implements $LancerModelCopyWith<$Res> {
  _$LancerModelCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? address = null,
    Object? nonce = null,
    Object? imageCID = freezed,
    Object? name = freezed,
    Object? email = freezed,
    Object? description = freezed,
    Object? registered = null,
  }) {
    return _then(_value.copyWith(
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
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
      email: freezed == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String?,
      description: freezed == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String?,
      registered: null == registered
          ? _value.registered
          : registered // ignore: cast_nullable_to_non_nullable
              as bool,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_LancerModelCopyWith<$Res>
    implements $LancerModelCopyWith<$Res> {
  factory _$$_LancerModelCopyWith(
          _$_LancerModel value, $Res Function(_$_LancerModel) then) =
      __$$_LancerModelCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String address,
      String nonce,
      String? imageCID,
      String? name,
      String? email,
      String? description,
      bool registered});
}

/// @nodoc
class __$$_LancerModelCopyWithImpl<$Res>
    extends _$LancerModelCopyWithImpl<$Res, _$_LancerModel>
    implements _$$_LancerModelCopyWith<$Res> {
  __$$_LancerModelCopyWithImpl(
      _$_LancerModel _value, $Res Function(_$_LancerModel) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? address = null,
    Object? nonce = null,
    Object? imageCID = freezed,
    Object? name = freezed,
    Object? email = freezed,
    Object? description = freezed,
    Object? registered = null,
  }) {
    return _then(_$_LancerModel(
      address: null == address
          ? _value.address
          : address // ignore: cast_nullable_to_non_nullable
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
      email: freezed == email
          ? _value.email
          : email // ignore: cast_nullable_to_non_nullable
              as String?,
      description: freezed == description
          ? _value.description
          : description // ignore: cast_nullable_to_non_nullable
              as String?,
      registered: null == registered
          ? _value.registered
          : registered // ignore: cast_nullable_to_non_nullable
              as bool,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_LancerModel implements _LancerModel {
  const _$_LancerModel(
      {required this.address,
      required this.nonce,
      this.imageCID,
      this.name,
      this.email,
      this.description,
      required this.registered});

  factory _$_LancerModel.fromJson(Map<String, dynamic> json) =>
      _$$_LancerModelFromJson(json);

  @override
  final String address;
  @override
  final String nonce;
  @override
  final String? imageCID;
  @override
  final String? name;
  @override
  final String? email;
  @override
  final String? description;
  @override
  final bool registered;

  @override
  String toString() {
    return 'LancerModel(address: $address, nonce: $nonce, imageCID: $imageCID, name: $name, email: $email, description: $description, registered: $registered)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_LancerModel &&
            (identical(other.address, address) || other.address == address) &&
            (identical(other.nonce, nonce) || other.nonce == nonce) &&
            (identical(other.imageCID, imageCID) ||
                other.imageCID == imageCID) &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.email, email) || other.email == email) &&
            (identical(other.description, description) ||
                other.description == description) &&
            (identical(other.registered, registered) ||
                other.registered == registered));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, address, nonce, imageCID, name,
      email, description, registered);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LancerModelCopyWith<_$_LancerModel> get copyWith =>
      __$$_LancerModelCopyWithImpl<_$_LancerModel>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_LancerModelToJson(
      this,
    );
  }
}

abstract class _LancerModel implements LancerModel {
  const factory _LancerModel(
      {required final String address,
      required final String nonce,
      final String? imageCID,
      final String? name,
      final String? email,
      final String? description,
      required final bool registered}) = _$_LancerModel;

  factory _LancerModel.fromJson(Map<String, dynamic> json) =
      _$_LancerModel.fromJson;

  @override
  String get address;
  @override
  String get nonce;
  @override
  String? get imageCID;
  @override
  String? get name;
  @override
  String? get email;
  @override
  String? get description;
  @override
  bool get registered;
  @override
  @JsonKey(ignore: true)
  _$$_LancerModelCopyWith<_$_LancerModel> get copyWith =>
      throw _privateConstructorUsedError;
}
