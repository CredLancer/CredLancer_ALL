// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'lancer_cubit.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

/// @nodoc
mixin _$LancerState {
  Option<Either<Unit, LancerSignatureProfile>> get profile =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $LancerStateCopyWith<LancerState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $LancerStateCopyWith<$Res> {
  factory $LancerStateCopyWith(
          LancerState value, $Res Function(LancerState) then) =
      _$LancerStateCopyWithImpl<$Res, LancerState>;
  @useResult
  $Res call({Option<Either<Unit, LancerSignatureProfile>> profile});
}

/// @nodoc
class _$LancerStateCopyWithImpl<$Res, $Val extends LancerState>
    implements $LancerStateCopyWith<$Res> {
  _$LancerStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? profile = null,
  }) {
    return _then(_value.copyWith(
      profile: null == profile
          ? _value.profile
          : profile // ignore: cast_nullable_to_non_nullable
              as Option<Either<Unit, LancerSignatureProfile>>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_LancerStateCopyWith<$Res>
    implements $LancerStateCopyWith<$Res> {
  factory _$$_LancerStateCopyWith(
          _$_LancerState value, $Res Function(_$_LancerState) then) =
      __$$_LancerStateCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({Option<Either<Unit, LancerSignatureProfile>> profile});
}

/// @nodoc
class __$$_LancerStateCopyWithImpl<$Res>
    extends _$LancerStateCopyWithImpl<$Res, _$_LancerState>
    implements _$$_LancerStateCopyWith<$Res> {
  __$$_LancerStateCopyWithImpl(
      _$_LancerState _value, $Res Function(_$_LancerState) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? profile = null,
  }) {
    return _then(_$_LancerState(
      profile: null == profile
          ? _value.profile
          : profile // ignore: cast_nullable_to_non_nullable
              as Option<Either<Unit, LancerSignatureProfile>>,
    ));
  }
}

/// @nodoc

class _$_LancerState implements _LancerState {
  const _$_LancerState({required this.profile});

  @override
  final Option<Either<Unit, LancerSignatureProfile>> profile;

  @override
  String toString() {
    return 'LancerState(profile: $profile)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_LancerState &&
            (identical(other.profile, profile) || other.profile == profile));
  }

  @override
  int get hashCode => Object.hash(runtimeType, profile);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_LancerStateCopyWith<_$_LancerState> get copyWith =>
      __$$_LancerStateCopyWithImpl<_$_LancerState>(this, _$identity);
}

abstract class _LancerState implements LancerState {
  const factory _LancerState(
      {required final Option<Either<Unit, LancerSignatureProfile>>
          profile}) = _$_LancerState;

  @override
  Option<Either<Unit, LancerSignatureProfile>> get profile;
  @override
  @JsonKey(ignore: true)
  _$$_LancerStateCopyWith<_$_LancerState> get copyWith =>
      throw _privateConstructorUsedError;
}
