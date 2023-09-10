import 'package:json_annotation/json_annotation.dart';

part 'quest_params.g.dart';

@JsonSerializable()
class QuestParams {
  final int orgId;
  final String title;
  final String description;
  final int reward;
  final int deadline;

  QuestParams({
    required this.orgId,
    required this.title,
    required this.description,
    required this.reward,
    required this.deadline,
  });

  factory QuestParams.fromJson(Map<String, dynamic> json) =>
      _$QuestParamsFromJson(json);

  Map<String, dynamic> toJson() => _$QuestParamsToJson(this);
}
