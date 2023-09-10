// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'lancer.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_LancerSignatureProfile _$$_LancerSignatureProfileFromJson(
        Map<String, dynamic> json) =>
    _$_LancerSignatureProfile(
      registered: json['registered'] as bool,
      message: json['message'] as String?,
      lancer: json['lancer'] == null
          ? null
          : LancerModel.fromJson(json['lancer'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_LancerSignatureProfileToJson(
        _$_LancerSignatureProfile instance) =>
    <String, dynamic>{
      'registered': instance.registered,
      'message': instance.message,
      'lancer': instance.lancer,
    };

_$_LancerModel _$$_LancerModelFromJson(Map<String, dynamic> json) =>
    _$_LancerModel(
      address: json['address'] as String,
      nonce: json['nonce'] as String,
      imageCID: json['imageCID'] as String?,
      name: json['name'] as String?,
      email: json['email'] as String?,
      description: json['description'] as String?,
      registered: json['registered'] as bool,
    );

Map<String, dynamic> _$$_LancerModelToJson(_$_LancerModel instance) =>
    <String, dynamic>{
      'address': instance.address,
      'nonce': instance.nonce,
      'imageCID': instance.imageCID,
      'name': instance.name,
      'email': instance.email,
      'description': instance.description,
      'registered': instance.registered,
    };
