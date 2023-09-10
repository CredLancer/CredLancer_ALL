// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'org_params.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

OrgParams _$OrgParamsFromJson(Map<String, dynamic> json) => OrgParams(
      name: json['name'] as String,
      admin: json['admin'] as String,
      description: json['description'] as String,
      email: json['email'] as String,
      signature: json['signature'] as String,
    );

Map<String, dynamic> _$OrgParamsToJson(OrgParams instance) => <String, dynamic>{
      'name': instance.name,
      'admin': instance.admin,
      'description': instance.description,
      'email': instance.email,
      'signature': instance.signature,
    };
