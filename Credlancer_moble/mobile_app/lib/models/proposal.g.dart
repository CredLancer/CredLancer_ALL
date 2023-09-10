// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'proposal.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_QuestProposalType _$$_QuestProposalTypeFromJson(Map<String, dynamic> json) =>
    _$_QuestProposalType(
      id: json['id'] as String,
      proposer:
          QuestProposer.fromJson(json['proposer'] as Map<String, dynamic>),
      blockNumber: json['blockNumber'] as int,
      file: QuestProposalFile.fromJson(json['file'] as Map<String, dynamic>),
      status: $enumDecode(_$ProposalStatusEnumMap, json['status']),
      questId: json['questId'] as int,
      fileCID: json['fileCID'] as String,
      workCID: json['workCID'] as String?,
    );

Map<String, dynamic> _$$_QuestProposalTypeToJson(
        _$_QuestProposalType instance) =>
    <String, dynamic>{
      'id': instance.id,
      'proposer': instance.proposer,
      'blockNumber': instance.blockNumber,
      'file': instance.file,
      'status': _$ProposalStatusEnumMap[instance.status]!,
      'questId': instance.questId,
      'fileCID': instance.fileCID,
      'workCID': instance.workCID,
    };

const _$ProposalStatusEnumMap = {
  ProposalStatus.Proposed: 'Proposed',
  ProposalStatus.Accepted: 'Accepted',
  ProposalStatus.Rejected: 'Rejected',
  ProposalStatus.Awarded: 'Awarded',
};

_$_QuestProposalFile _$$_QuestProposalFileFromJson(Map<String, dynamic> json) =>
    _$_QuestProposalFile(
      description: json['description'] as String,
      approxCompletionTime: json['approxCompletionTime'] as String,
      cid: json['cid'] as String,
    );

Map<String, dynamic> _$$_QuestProposalFileToJson(
        _$_QuestProposalFile instance) =>
    <String, dynamic>{
      'description': instance.description,
      'approxCompletionTime': instance.approxCompletionTime,
      'cid': instance.cid,
    };

_$_OrganizationModel _$$_OrganizationModelFromJson(Map<String, dynamic> json) =>
    _$_OrganizationModel(
      id: json['id'] as int,
      admin: json['admin'] as String,
      name: json['name'] as String,
      imageCID: json['imageCID'] as String,
      imageURL: json['imageURL'] as String,
      description: json['description'] as String,
      video: json['video'] as String,
      blockNumber: json['blockNumber'] as int,
      email: json['email'] as String,
    );

Map<String, dynamic> _$$_OrganizationModelToJson(
        _$_OrganizationModel instance) =>
    <String, dynamic>{
      'id': instance.id,
      'admin': instance.admin,
      'name': instance.name,
      'imageCID': instance.imageCID,
      'imageURL': instance.imageURL,
      'description': instance.description,
      'video': instance.video,
      'blockNumber': instance.blockNumber,
      'email': instance.email,
    };

_$_QuestModel _$$_QuestModelFromJson(Map<String, dynamic> json) =>
    _$_QuestModel(
      id: json['id'] as String,
      value: json['value'] as String,
      status: $enumDecode(_$ProposalStatusEnumMap, json['status']),
      questCID: json['questCID'] as String,
      orgId: json['orgId'] as int,
      deadline: json['deadline'] as String,
      blockNumber: json['blockNumber'] as int,
      org: OrganizationModel.fromJson(json['org'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_QuestModelToJson(_$_QuestModel instance) =>
    <String, dynamic>{
      'id': instance.id,
      'value': instance.value,
      'status': _$ProposalStatusEnumMap[instance.status]!,
      'questCID': instance.questCID,
      'orgId': instance.orgId,
      'deadline': instance.deadline,
      'blockNumber': instance.blockNumber,
      'org': instance.org,
    };

_$_LancerProposal _$$_LancerProposalFromJson(Map<String, dynamic> json) =>
    _$_LancerProposal(
      id: json['id'] as String,
      quest: QuestModel.fromJson(json['quest'] as Map<String, dynamic>),
      proposer: json['proposer'] as String,
      blockNumber: json['blockNumber'] as int,
      file: QuestProposalFile.fromJson(json['file'] as Map<String, dynamic>),
      status: $enumDecode(_$ProposalStatusEnumMap, json['status']),
      questId: json['questId'] as String,
      fileCID: json['fileCID'] as String,
      workCID: json['workCID'] as String?,
    );

Map<String, dynamic> _$$_LancerProposalToJson(_$_LancerProposal instance) =>
    <String, dynamic>{
      'id': instance.id,
      'quest': instance.quest,
      'proposer': instance.proposer,
      'blockNumber': instance.blockNumber,
      'file': instance.file,
      'status': _$ProposalStatusEnumMap[instance.status]!,
      'questId': instance.questId,
      'fileCID': instance.fileCID,
      'workCID': instance.workCID,
    };

_$_QuestProposer _$$_QuestProposerFromJson(Map<String, dynamic> json) =>
    _$_QuestProposer(
      address: json['address'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
      description: json['description'] as String,
      imageCID: json['imageCID'] as String,
      nonce: json['nonce'] as String,
      registered: json['registered'] as bool,
    );

Map<String, dynamic> _$$_QuestProposerToJson(_$_QuestProposer instance) =>
    <String, dynamic>{
      'address': instance.address,
      'name': instance.name,
      'email': instance.email,
      'description': instance.description,
      'imageCID': instance.imageCID,
      'nonce': instance.nonce,
      'registered': instance.registered,
    };
