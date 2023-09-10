// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'quest.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_QuestResponse _$$_QuestResponseFromJson(Map<String, dynamic> json) =>
    _$_QuestResponse(
      title: json['title'] as String,
      description: json['description'] as String,
      image: json['image'] as String,
      id: json['id'] as int,
      questCID: json['questCID'] as String,
      status: json['status'] as String,
      orgId: json['orgId'] as int,
      value: json['value'] as int,
      blockNumber: json['blockNumber'] as int?,
      deadline: json['deadline'] as int?,
    );

Map<String, dynamic> _$$_QuestResponseToJson(_$_QuestResponse instance) =>
    <String, dynamic>{
      'title': instance.title,
      'description': instance.description,
      'image': instance.image,
      'id': instance.id,
      'questCID': instance.questCID,
      'status': instance.status,
      'orgId': instance.orgId,
      'value': instance.value,
      'blockNumber': instance.blockNumber,
      'deadline': instance.deadline,
    };
