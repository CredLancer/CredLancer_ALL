part of 'sign_up_cubit.dart';

@freezed
class SignUpState with _$SignUpState {
  const factory SignUpState({
    required bool isWalletConnected,
    required bool connectLoading,
    required bool signUpLoading,
    required UserType userType,
    required Option<Either<Unit, Unit>> signUpOption,
    required Option<Unit> openWalletOption,
  }) = _SignUpState;

  factory SignUpState.initial() => SignUpState(
        isWalletConnected: false,
        connectLoading: false,
        signUpLoading: false,
        userType: const UserType.none(),
        signUpOption: none(),
        openWalletOption: none(),
      );
}

@freezed
class UserType with _$UserType {
  const factory UserType.none() = _None;
  const factory UserType.newUser() = _New;
  const factory UserType.org({OrganizationModel? org}) = _Org;
  const factory UserType.lancer({LancerSignatureProfile? lancer}) = _Lancer;
}
