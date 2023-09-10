part of 'org_cubit.dart';

@freezed
class OrgState with _$OrgState {
  const factory OrgState({
    required Option<Either<Unit, OrganizationModel>> profile,
  }) = _OrgState;

  factory OrgState.initial() => _OrgState(
        profile: none(),
      );
}
