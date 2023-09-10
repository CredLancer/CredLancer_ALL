import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/models/quest.dart';
import 'package:cred_lancer/repositories/data_repository.dart';
import 'package:dartz/dartz.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

part 'quests_state.dart';
part 'quests_cubit.freezed.dart';

@lazySingleton
class QuestsCubit extends Cubit<QuestsState> {
  QuestsCubit() : super(QuestsState.initial());

  void started() {
    emit(state.copyWith(quests: optionOf(right(DataRepository.quests))));
  }

  createQuest(QuestResponse quest) async {
    emit(state.copyWith(createLoading: true, createQuestOption: none()));
    await Future.delayed(const Duration(seconds: 1));
    final List<QuestResponse> quests = List<QuestResponse>.from(
        state.quests.fold(() => [], (a) => a.fold((l) => [], (r) => r)));
    emit(state.copyWith(quests: optionOf(right([quest, ...quests]))));
    emit(state.copyWith(
        createLoading: false, createQuestOption: optionOf(right(unit))));
  }

  createProposal(QuestProposalType proposal) async {
    emit(state.copyWith(proposalLoading: true, proposalOption: none()));
    await Future.delayed(const Duration(seconds: 1));
    final List<QuestResponse> quests = List<QuestResponse>.from(
        state.quests.fold(() => [], (a) => a.fold((l) => [], (r) => r)));
    final questIdx =
        quests.indexWhere((element) => element.id == proposal.questId);
    if (questIdx >= 0) {
      quests[questIdx] = quests[questIdx].copyWith(status: 'applied');
      emit(state.copyWith(quests: optionOf(right(quests))));
    }
    emit(state.copyWith(
        proposals: optionOf(right([
      proposal,
      ...state.proposals.fold(() => [], (a) => a.fold((l) => [], (r) => r)),
    ]))));
    emit(state.copyWith(
        proposalLoading: false, proposalOption: optionOf(right(unit))));
  }
}
