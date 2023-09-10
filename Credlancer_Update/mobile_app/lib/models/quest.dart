import 'package:freezed_annotation/freezed_annotation.dart';

part 'quest.freezed.dart';
part 'quest.g.dart';

@freezed
class QuestResponse with _$QuestResponse {
  const factory QuestResponse({
    required String title,
    required String description,
    required String image,
    required int id,
    required String questCID,
    required String status,
    required int orgId,
    required int value,
    int? blockNumber,
    int? deadline,
  }) = _QuestResponse;

  factory QuestResponse.fromJson(Map<String, dynamic> json) =>
      _$QuestResponseFromJson(json);
}
