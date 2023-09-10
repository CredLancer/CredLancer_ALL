import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/models/proposal_params.dart';
import 'package:cred_lancer/utils/constants.dart';
import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';

abstract class IProposalRepository {
  Future<void> createProposal(
      {required String questId, required ProposalParams proposal});
  Future<List<QuestProposalType>> fetchProposalsbyQuestId(
      {required int questID});
  Future fetchQuestByCID({required String cid});
  Future<List<LancerProposal>> fetchProposalsFromLancer(
      {required String address});
  Future<void> submitWork({proposalID, model});
}

@LazySingleton(as: IProposalRepository)
class ProposalRepository implements IProposalRepository {
  final Dio _dio;

  ProposalRepository(this._dio);

  @override
  Future<void> createProposal({
    required String questId,
    required ProposalParams proposal,
  }) {
    return _dio.get(
      '$BASE_URL/proposal/$questId',
      data: proposal.toJson(),
      options: Options(
        headers: {
          "content-type": "application/json",
        },
      ),
    );
  }

  @override
  Future<List<QuestProposalType>> fetchProposalsbyQuestId({
    required int questID,
  }) async {
    final response = await _dio.get('$BASE_URL/proposal/questId/$questID');
    return response.data['data']
        .map((e) => QuestProposalType.fromJson(e))
        .toList();
  }

  @override
  Future fetchQuestByCID({required String cid}) async {
    final response = await _dio.get('$LIGHTHOUSE_URL${cid.substring(2)}');
    return response.data;
  }

  @override
  Future<List<LancerProposal>> fetchProposalsFromLancer(
      {required String address}) async {
    final response = await _dio.get(
      '$BASE_URL/proposal/address/$address',
      options: Options(
        headers: {
          "content-type": "application/json",
        },
      ),
    );
    return response.data['data']
        .map((e) => LancerProposal.fromJson(e))
        .toList();
  }

  @override
  Future<void> submitWork({proposalID, model}) {
    return _dio.post(
      '$BASE_URL/work/$proposalID',
      data: model.toJson(),
      options: Options(
        headers: {
          "content-type": "application/json",
        },
      ),
    );
  }
}
