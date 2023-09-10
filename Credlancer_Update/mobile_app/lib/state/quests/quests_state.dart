part of 'quests_cubit.dart';

@freezed
class QuestsState with _$QuestsState {
  const factory QuestsState({
    required Option<Either<Unit, List<QuestResponse>>> quests,
    required bool createLoading,
    required Option<Either<Unit, Unit>> createQuestOption,
    required bool proposalLoading,
    required Option<Either<Unit, Unit>> proposalOption,
    required Option<Either<Unit, List<QuestProposalType>>> proposals,
  }) = _QuestsState;

  factory QuestsState.initial() => _QuestsState(
        quests: none(),
        createLoading: false,
        createQuestOption: none(),
        proposalLoading: false,
        proposalOption: none(),
        proposals: none(),
      );
}
