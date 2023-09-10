// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'work_params.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

WorkParams _$WorkParamsFromJson(Map<String, dynamic> json) => WorkParams(
      address: json['address'] as String,
      signature: json['signature'] as String,
      cid: json['cid'] as String,
    );

Map<String, dynamic> _$WorkParamsToJson(WorkParams instance) =>
    <String, dynamic>{
      'address': instance.address,
      'signature': instance.signature,
      'cid': instance.cid,
    };
