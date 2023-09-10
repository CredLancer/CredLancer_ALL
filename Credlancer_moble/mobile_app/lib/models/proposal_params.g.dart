// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'proposal_params.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ProposalParams _$ProposalParamsFromJson(Map<String, dynamic> json) =>
    ProposalParams(
      proposer: json['proposer'] as String,
      approxCompletionTime: json['approxCompletionTime'] as String,
      signature: json['signature'] as String,
      descripton: json['descripton'] as String,
    );

Map<String, dynamic> _$ProposalParamsToJson(ProposalParams instance) =>
    <String, dynamic>{
      'proposer': instance.proposer,
      'approxCompletionTime': instance.approxCompletionTime,
      'signature': instance.signature,
      'descripton': instance.descripton,
    };
