part of 'lancer_cubit.dart';

@freezed
class LancerState with _$LancerState {
  const factory LancerState({
    required Option<Either<Unit, LancerSignatureProfile>> profile,
  }) = _LancerState;

  factory LancerState.initial() => _LancerState(
        profile: none(),
      );
}
