// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'org_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_OrgResponse _$$_OrgResponseFromJson(Map<String, dynamic> json) =>
    _$_OrgResponse(
      signature: json['signature'] as String,
      nonce: json['nonce'] as String,
      imageCID: json['imageCID'] as String?,
      name: json['name'] as String?,
    );

Map<String, dynamic> _$$_OrgResponseToJson(_$_OrgResponse instance) =>
    <String, dynamic>{
      'signature': instance.signature,
      'nonce': instance.nonce,
      'imageCID': instance.imageCID,
      'name': instance.name,
    };
