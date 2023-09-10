// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'lancer_params.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

LancerParams _$LancerParamsFromJson(Map<String, dynamic> json) => LancerParams(
      name: json['name'] as String,
      email: json['email'] as String,
      address: json['address'] as String,
      signature: json['signature'] as String,
      description: json['description'] as String,
    );

Map<String, dynamic> _$LancerParamsToJson(LancerParams instance) =>
    <String, dynamic>{
      'name': instance.name,
      'email': instance.email,
      'address': instance.address,
      'signature': instance.signature,
      'description': instance.description,
    };
