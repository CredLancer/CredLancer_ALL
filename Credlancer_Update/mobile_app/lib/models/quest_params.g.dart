// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'quest_params.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

QuestParams _$QuestParamsFromJson(Map<String, dynamic> json) => QuestParams(
      orgId: json['orgId'] as int,
      title: json['title'] as String,
      description: json['description'] as String,
      reward: json['reward'] as int,
      deadline: json['deadline'] as int,
    );

Map<String, dynamic> _$QuestParamsToJson(QuestParams instance) =>
    <String, dynamic>{
      'orgId': instance.orgId,
      'title': instance.title,
      'description': instance.description,
      'reward': instance.reward,
      'deadline': instance.deadline,
    };
