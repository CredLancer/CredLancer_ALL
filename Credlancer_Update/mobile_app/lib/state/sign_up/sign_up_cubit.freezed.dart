// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'sign_up_cubit.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$SignUpState {
  bool get isWalletConnected => throw _privateConstructorUsedError;
  bool get connectLoading => throw _privateConstructorUsedError;
  bool get signUpLoading => throw _privateConstructorUsedError;
  UserType get userType => throw _privateConstructorUsedError;
  Option<Either<Unit, Unit>> get signUpOption =>
      throw _privateConstructorUsedError;
  Option<Unit> get openWalletOption => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $SignUpStateCopyWith<SignUpState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $SignUpStateCopyWith<$Res> {
  factory $SignUpStateCopyWith(
          SignUpState value, $Res Function(SignUpState) then) =
      _$SignUpStateCopyWithImpl<$Res, SignUpState>;
  @useResult
  $Res call(
      {bool isWalletConnected,
      bool connectLoading,
      bool signUpLoading,
      UserType userType,
      Option<Either<Unit, Unit>> signUpOption,
      Option<Unit> openWalletOption});

  $UserTypeCopyWith<$Res> get userType;
}

/// @nodoc
class _$SignUpStateCopyWithImpl<$Res, $Val extends SignUpState>
    implements $SignUpStateCopyWith<$Res> {
  _$SignUpStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? isWalletConnected = null,
    Object? connectLoading = null,
    Object? signUpLoading = null,
    Object? userType = null,
    Object? signUpOption = null,
    Object? openWalletOption = null,
  }) {
    return _then(_value.copyWith(
      isWalletConnected: null == isWalletConnected
          ? _value.isWalletConnected
          : isWalletConnected // ignore: cast_nullable_to_non_nullable
              as bool,
      connectLoading: null == connectLoading
          ? _value.connectLoading
          : connectLoading // ignore: cast_nullable_to_non_nullable
              as bool,
      signUpLoading: null == signUpLoading
          ? _value.signUpLoading
          : signUpLoading // ignore: cast_nullable_to_non_nullable
              as bool,
      userType: null == userType
          ? _value.userType
          : userType // ignore: cast_nullable_to_non_nullable
              as UserType,
      signUpOption: null == signUpOption
          ? _value.signUpOption
          : signUpOption // ignore: cast_nullable_to_non_nullable
              as Option<Either<Unit, Unit>>,
      openWalletOption: null == openWalletOption
          ? _value.openWalletOption
          : openWalletOption // ignore: cast_nullable_to_non_nullable
              as Option<Unit>,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $UserTypeCopyWith<$Res> get userType {
    return $UserTypeCopyWith<$Res>(_value.userType, (value) {
      return _then(_value.copyWith(userType: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_SignUpStateCopyWith<$Res>
    implements $SignUpStateCopyWith<$Res> {
  factory _$$_SignUpStateCopyWith(
          _$_SignUpState value, $Res Function(_$_SignUpState) then) =
      __$$_SignUpStateCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {bool isWalletConnected,
      bool connectLoading,
      bool signUpLoading,
      UserType userType,
      Option<Either<Unit, Unit>> signUpOption,
      Option<Unit> openWalletOption});

  @override
  $UserTypeCopyWith<$Res> get userType;
}

/// @nodoc
class __$$_SignUpStateCopyWithImpl<$Res>
    extends _$SignUpStateCopyWithImpl<$Res, _$_SignUpState>
    implements _$$_SignUpStateCopyWith<$Res> {
  __$$_SignUpStateCopyWithImpl(
      _$_SignUpState _value, $Res Function(_$_SignUpState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? isWalletConnected = null,
    Object? connectLoading = null,
    Object? signUpLoading = null,
    Object? userType = null,
    Object? signUpOption = null,
    Object? openWalletOption = null,
  }) {
    return _then(_$_SignUpState(
      isWalletConnected: null == isWalletConnected
          ? _value.isWalletConnected
          : isWalletConnected // ignore: cast_nullable_to_non_nullable
              as bool,
      connectLoading: null == connectLoading
          ? _value.connectLoading
          : connectLoading // ignore: cast_nullable_to_non_nullable
              as bool,
      signUpLoading: null == signUpLoading
          ? _value.signUpLoading
          : signUpLoading // ignore: cast_nullable_to_non_nullable
              as bool,
      userType: null == userType
          ? _value.userType
          : userType // ignore: cast_nullable_to_non_nullable
              as UserType,
      signUpOption: null == signUpOption
          ? _value.signUpOption
          : signUpOption // ignore: cast_nullable_to_non_nullable
              as Option<Either<Unit, Unit>>,
      openWalletOption: null == openWalletOption
          ? _value.openWalletOption
          : openWalletOption // ignore: cast_nullable_to_non_nullable
              as Option<Unit>,
    ));
  }
}

/// @nodoc

class _$_SignUpState implements _SignUpState {
  const _$_SignUpState(
      {required this.isWalletConnected,
      required this.connectLoading,
      required this.signUpLoading,
      required this.userType,
      required this.signUpOption,
      required this.openWalletOption});

  @override
  final bool isWalletConnected;
  @override
  final bool connectLoading;
  @override
  final bool signUpLoading;
  @override
  final UserType userType;
  @override
  final Option<Either<Unit, Unit>> signUpOption;
  @override
  final Option<Unit> openWalletOption;

  @override
  String toString() {
    return 'SignUpState(isWalletConnected: $isWalletConnected, connectLoading: $connectLoading, signUpLoading: $signUpLoading, userType: $userType, signUpOption: $signUpOption, openWalletOption: $openWalletOption)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_SignUpState &&
            (identical(other.isWalletConnected, isWalletConnected) ||
                other.isWalletConnected == isWalletConnected) &&
            (identical(other.connectLoading, connectLoading) ||
                other.connectLoading == connectLoading) &&
            (identical(other.signUpLoading, signUpLoading) ||
                other.signUpLoading == signUpLoading) &&
            (identical(other.userType, userType) ||
                other.userType == userType) &&
            (identical(other.signUpOption, signUpOption) ||
                other.signUpOption == signUpOption) &&
            (identical(other.openWalletOption, openWalletOption) ||
                other.openWalletOption == openWalletOption));
  }

  @override
  int get hashCode => Object.hash(runtimeType, isWalletConnected,
      connectLoading, signUpLoading, userType, signUpOption, openWalletOption);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_SignUpStateCopyWith<_$_SignUpState> get copyWith =>
      __$$_SignUpStateCopyWithImpl<_$_SignUpState>(this, _$identity);
}

abstract class _SignUpState implements SignUpState {
  const factory _SignUpState(
      {required final bool isWalletConnected,
      required final bool connectLoading,
      required final bool signUpLoading,
      required final UserType userType,
      required final Option<Either<Unit, Unit>> signUpOption,
      required final Option<Unit> openWalletOption}) = _$_SignUpState;

  @override
  bool get isWalletConnected;
  @override
  bool get connectLoading;
  @override
  bool get signUpLoading;
  @override
  UserType get userType;
  @override
  Option<Either<Unit, Unit>> get signUpOption;
  @override
  Option<Unit> get openWalletOption;
  @override
  @JsonKey(ignore: true)
  _$$_SignUpStateCopyWith<_$_SignUpState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$UserType {
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() none,
    required TResult Function() newUser,
    required TResult Function(OrganizationModel? org) org,
    required TResult Function(LancerSignatureProfile? lancer) lancer,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? none,
    TResult? Function()? newUser,
    TResult? Function(OrganizationModel? org)? org,
    TResult? Function(LancerSignatureProfile? lancer)? lancer,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? none,
    TResult Function()? newUser,
    TResult Function(OrganizationModel? org)? org,
    TResult Function(LancerSignatureProfile? lancer)? lancer,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_None value) none,
    required TResult Function(_New value) newUser,
    required TResult Function(_Org value) org,
    required TResult Function(_Lancer value) lancer,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_None value)? none,
    TResult? Function(_New value)? newUser,
    TResult? Function(_Org value)? org,
    TResult? Function(_Lancer value)? lancer,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_None value)? none,
    TResult Function(_New value)? newUser,
    TResult Function(_Org value)? org,
    TResult Function(_Lancer value)? lancer,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $UserTypeCopyWith<$Res> {
  factory $UserTypeCopyWith(UserType value, $Res Function(UserType) then) =
      _$UserTypeCopyWithImpl<$Res, UserType>;
}

/// @nodoc
class _$UserTypeCopyWithImpl<$Res, $Val extends UserType>
    implements $UserTypeCopyWith<$Res> {
  _$UserTypeCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;
}

/// @nodoc
abstract class _$$_NoneCopyWith<$Res> {
  factory _$$_NoneCopyWith(_$_None value, $Res Function(_$_None) then) =
      __$$_NoneCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_NoneCopyWithImpl<$Res> extends _$UserTypeCopyWithImpl<$Res, _$_None>
    implements _$$_NoneCopyWith<$Res> {
  __$$_NoneCopyWithImpl(_$_None _value, $Res Function(_$_None) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_None implements _None {
  const _$_None();

  @override
  String toString() {
    return 'UserType.none()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_None);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() none,
    required TResult Function() newUser,
    required TResult Function(OrganizationModel? org) org,
    required TResult Function(LancerSignatureProfile? lancer) lancer,
  }) {
    return none();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? none,
    TResult? Function()? newUser,
    TResult? Function(OrganizationModel? org)? org,
    TResult? Function(LancerSignatureProfile? lancer)? lancer,
  }) {
    return none?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? none,
    TResult Function()? newUser,
    TResult Function(OrganizationModel? org)? org,
    TResult Function(LancerSignatureProfile? lancer)? lancer,
    required TResult orElse(),
  }) {
    if (none != null) {
      return none();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_None value) none,
    required TResult Function(_New value) newUser,
    required TResult Function(_Org value) org,
    required TResult Function(_Lancer value) lancer,
  }) {
    return none(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_None value)? none,
    TResult? Function(_New value)? newUser,
    TResult? Function(_Org value)? org,
    TResult? Function(_Lancer value)? lancer,
  }) {
    return none?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_None value)? none,
    TResult Function(_New value)? newUser,
    TResult Function(_Org value)? org,
    TResult Function(_Lancer value)? lancer,
    required TResult orElse(),
  }) {
    if (none != null) {
      return none(this);
    }
    return orElse();
  }
}

abstract class _None implements UserType {
  const factory _None() = _$_None;
}

/// @nodoc
abstract class _$$_NewCopyWith<$Res> {
  factory _$$_NewCopyWith(_$_New value, $Res Function(_$_New) then) =
      __$$_NewCopyWithImpl<$Res>;
}

/// @nodoc
class __$$_NewCopyWithImpl<$Res> extends _$UserTypeCopyWithImpl<$Res, _$_New>
    implements _$$_NewCopyWith<$Res> {
  __$$_NewCopyWithImpl(_$_New _value, $Res Function(_$_New) _then)
      : super(_value, _then);
}

/// @nodoc

class _$_New implements _New {
  const _$_New();

  @override
  String toString() {
    return 'UserType.newUser()';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType && other is _$_New);
  }

  @override
  int get hashCode => runtimeType.hashCode;

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() none,
    required TResult Function() newUser,
    required TResult Function(OrganizationModel? org) org,
    required TResult Function(LancerSignatureProfile? lancer) lancer,
  }) {
    return newUser();
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? none,
    TResult? Function()? newUser,
    TResult? Function(OrganizationModel? org)? org,
    TResult? Function(LancerSignatureProfile? lancer)? lancer,
  }) {
    return newUser?.call();
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? none,
    TResult Function()? newUser,
    TResult Function(OrganizationModel? org)? org,
    TResult Function(LancerSignatureProfile? lancer)? lancer,
    required TResult orElse(),
  }) {
    if (newUser != null) {
      return newUser();
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_None value) none,
    required TResult Function(_New value) newUser,
    required TResult Function(_Org value) org,
    required TResult Function(_Lancer value) lancer,
  }) {
    return newUser(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_None value)? none,
    TResult? Function(_New value)? newUser,
    TResult? Function(_Org value)? org,
    TResult? Function(_Lancer value)? lancer,
  }) {
    return newUser?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_None value)? none,
    TResult Function(_New value)? newUser,
    TResult Function(_Org value)? org,
    TResult Function(_Lancer value)? lancer,
    required TResult orElse(),
  }) {
    if (newUser != null) {
      return newUser(this);
    }
    return orElse();
  }
}

abstract class _New implements UserType {
  const factory _New() = _$_New;
}

/// @nodoc
abstract class _$$_OrgCopyWith<$Res> {
  factory _$$_OrgCopyWith(_$_Org value, $Res Function(_$_Org) then) =
      __$$_OrgCopyWithImpl<$Res>;
  @useResult
  $Res call({OrganizationModel? org});

  $OrganizationModelCopyWith<$Res>? get org;
}

/// @nodoc
class __$$_OrgCopyWithImpl<$Res> extends _$UserTypeCopyWithImpl<$Res, _$_Org>
    implements _$$_OrgCopyWith<$Res> {
  __$$_OrgCopyWithImpl(_$_Org _value, $Res Function(_$_Org) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? org = freezed,
  }) {
    return _then(_$_Org(
      org: freezed == org
          ? _value.org
          : org // ignore: cast_nullable_to_non_nullable
              as OrganizationModel?,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $OrganizationModelCopyWith<$Res>? get org {
    if (_value.org == null) {
      return null;
    }

    return $OrganizationModelCopyWith<$Res>(_value.org!, (value) {
      return _then(_value.copyWith(org: value));
    });
  }
}

/// @nodoc

class _$_Org implements _Org {
  const _$_Org({this.org});

  @override
  final OrganizationModel? org;

  @override
  String toString() {
    return 'UserType.org(org: $org)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Org &&
            (identical(other.org, org) || other.org == org));
  }

  @override
  int get hashCode => Object.hash(runtimeType, org);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_OrgCopyWith<_$_Org> get copyWith =>
      __$$_OrgCopyWithImpl<_$_Org>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() none,
    required TResult Function() newUser,
    required TResult Function(OrganizationModel? org) org,
    required TResult Function(LancerSignatureProfile? lancer) lancer,
  }) {
    return org(this.org);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? none,
    TResult? Function()? newUser,
    TResult? Function(OrganizationModel? org)? org,
    TResult? Function(LancerSignatureProfile? lancer)? lancer,
  }) {
    return org?.call(this.org);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? none,
    TResult Function()? newUser,
    TResult Function(OrganizationModel? org)? org,
    TResult Function(LancerSignatureProfile? lancer)? lancer,
    required TResult orElse(),
  }) {
    if (org != null) {
      return org(this.org);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_None value) none,
    required TResult Function(_New value) newUser,
    required TResult Function(_Org value) org,
    required TResult Function(_Lancer value) lancer,
  }) {
    return org(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_None value)? none,
    TResult? Function(_New value)? newUser,
    TResult? Function(_Org value)? org,
    TResult? Function(_Lancer value)? lancer,
  }) {
    return org?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_None value)? none,
    TResult Function(_New value)? newUser,
    TResult Function(_Org value)? org,
    TResult Function(_Lancer value)? lancer,
    required TResult orElse(),
  }) {
    if (org != null) {
      return org(this);
    }
    return orElse();
  }
}

abstract class _Org implements UserType {
  const factory _Org({final OrganizationModel? org}) = _$_Org;

  OrganizationModel? get org;
  @JsonKey(ignore: true)
  _$$_OrgCopyWith<_$_Org> get copyWith => throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$_LancerCopyWith<$Res> {
  factory _$$_LancerCopyWith(_$_Lancer value, $Res Function(_$_Lancer) then) =
      __$$_LancerCopyWithImpl<$Res>;
  @useResult
  $Res call({LancerSignatureProfile? lancer});

  $LancerSignatureProfileCopyWith<$Res>? get lancer;
}

/// @nodoc
class __$$_LancerCopyWithImpl<$Res>
    extends _$UserTypeCopyWithImpl<$Res, _$_Lancer>
    implements _$$_LancerCopyWith<$Res> {
  __$$_LancerCopyWithImpl(_$_Lancer _value, $Res Function(_$_Lancer) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? lancer = freezed,
  }) {
    return _then(_$_Lancer(
      lancer: freezed == lancer
          ? _value.lancer
          : lancer // ignore: cast_nullable_to_non_nullable
              as LancerSignatureProfile?,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $LancerSignatureProfileCopyWith<$Res>? get lancer {
    if (_value.lancer == null) {
      return null;
    }

    return $LancerSignatureProfileCopyWith<$Res>(_value.lancer!, (value) {
      return _then(_value.copyWith(lancer: value));
    });
  }
}

/// @nodoc

class _$_Lancer implements _Lancer {
  const _$_Lancer({this.lancer});

  @override
  final LancerSignatureProfile? lancer;

  @override
  String toString() {
    return 'UserType.lancer(lancer: $lancer)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_Lancer &&
            (identical(other.lancer, lancer) || other.lancer == lancer));
  }

  @override
  int get hashCode => Object.hash(runtimeType, lancer);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LancerCopyWith<_$_Lancer> get copyWith =>
      __$$_LancerCopyWithImpl<_$_Lancer>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function() none,
    required TResult Function() newUser,
    required TResult Function(OrganizationModel? org) org,
    required TResult Function(LancerSignatureProfile? lancer) lancer,
  }) {
    return lancer(this.lancer);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function()? none,
    TResult? Function()? newUser,
    TResult? Function(OrganizationModel? org)? org,
    TResult? Function(LancerSignatureProfile? lancer)? lancer,
  }) {
    return lancer?.call(this.lancer);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function()? none,
    TResult Function()? newUser,
    TResult Function(OrganizationModel? org)? org,
    TResult Function(LancerSignatureProfile? lancer)? lancer,
    required TResult orElse(),
  }) {
    if (lancer != null) {
      return lancer(this.lancer);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(_None value) none,
    required TResult Function(_New value) newUser,
    required TResult Function(_Org value) org,
    required TResult Function(_Lancer value) lancer,
  }) {
    return lancer(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(_None value)? none,
    TResult? Function(_New value)? newUser,
    TResult? Function(_Org value)? org,
    TResult? Function(_Lancer value)? lancer,
  }) {
    return lancer?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(_None value)? none,
    TResult Function(_New value)? newUser,
    TResult Function(_Org value)? org,
    TResult Function(_Lancer value)? lancer,
    required TResult orElse(),
  }) {
    if (lancer != null) {
      return lancer(this);
    }
    return orElse();
  }
}

abstract class _Lancer implements UserType {
  const factory _Lancer({final LancerSignatureProfile? lancer}) = _$_Lancer;

  LancerSignatureProfile? get lancer;
  @JsonKey(ignore: true)
  _$$_LancerCopyWith<_$_Lancer> get copyWith =>
      throw _privateConstructorUsedError;
}
