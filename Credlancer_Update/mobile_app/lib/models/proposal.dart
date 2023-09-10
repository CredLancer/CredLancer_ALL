import 'package:freezed_annotation/freezed_annotation.dart';

part 'proposal.freezed.dart';
part 'proposal.g.dart';

@freezed
class QuestProposalType with _$QuestProposalType {
  const factory QuestProposalType({
    required String id,
    required QuestProposer proposer,
    required int blockNumber,
    required QuestProposalFile file,
    required ProposalStatus status,
    required int questId,
    required String fileCID,
    String? workCID,
  }) = _QuestProposalType;

  factory QuestProposalType.fromJson(Map<String, dynamic> json) =>
      _$QuestProposalTypeFromJson(json);
}

@freezed
class QuestProposalFile with _$QuestProposalFile {
  const factory QuestProposalFile({
    required String description,
    required String approxCompletionTime,
    required String cid,
  }) = _QuestProposalFile;

  factory QuestProposalFile.fromJson(Map<String, dynamic> json) =>
      _$QuestProposalFileFromJson(json);
}

@freezed
class OrganizationModel with _$OrganizationModel {
  const factory OrganizationModel({
    required int id,
    required String admin,
    required String name,
    required String imageCID,
    required String imageURL,
    required String description,
    required String video,
    required int blockNumber,
    required String email,
  }) = _OrganizationModel;

  factory OrganizationModel.fromJson(Map<String, dynamic> json) =>
      _$OrganizationModelFromJson(json);
}

@freezed
class QuestModel with _$QuestModel {
  const factory QuestModel({
    required String id,
    required String value,
    required ProposalStatus status,
    required String questCID,
    required int orgId,
    required String deadline,
    required int blockNumber,
    required OrganizationModel org,
  }) = _QuestModel;

  factory QuestModel.fromJson(Map<String, dynamic> json) =>
      _$QuestModelFromJson(json);
}

@freezed
class LancerProposal with _$LancerProposal {
  const factory LancerProposal({
    required String id,
    required QuestModel quest,
    required String proposer,
    required int blockNumber,
    required QuestProposalFile file,
    required ProposalStatus status,
    required String questId,
    required String fileCID,
    String? workCID,
  }) = _LancerProposal;

  factory LancerProposal.fromJson(Map<String, dynamic> json) =>
      _$LancerProposalFromJson(json);
}

enum ProposalStatus {
  Proposed,
  Accepted,
  Rejected,
  Awarded,
}

@freezed
class QuestProposer with _$QuestProposer {
  const factory QuestProposer({
    required String address,
    required String name,
    required String email,
    required String description,
    required String imageCID,
    required String nonce,
    required bool registered,
  }) = _QuestProposer;

  factory QuestProposer.fromJson(Map<String, dynamic> json) =>
      _$QuestProposerFromJson(json);
}
