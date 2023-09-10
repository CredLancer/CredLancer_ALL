import 'package:cred_lancer/models/quest.dart';
import 'package:cred_lancer/models/quest_params.dart';
import 'package:cred_lancer/utils/constants.dart';
import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';

abstract class IQuestRepository {
  Future<List<QuestResponse>> fetchQuests({int page = 1, int limit = 10});
  Future createQuest({required QuestParams params});
  Future<QuestResponse> fetchQuestByOrgID({required int orgId});
  Future<QuestResponse> fetchQuestByCID({required String cid});
  Future<QuestResponse> fetchQuestById({required String id});
}

@LazySingleton(as: IQuestRepository)
class QuestRepository implements IQuestRepository {
  final Dio _dio;

  QuestRepository(this._dio);

  @override
  Future<List<QuestResponse>> fetchQuests(
      {int page = 1, int limit = 10}) async {
    final response = await _dio.get('$BASE_URL/quest?page=$page&limit=$limit');
    return response.data;
  }

  @override
  Future createQuest({required QuestParams params}) {
    return _dio.post(
      '$BASE_URL/quest',
      data: params.toJson(),
      options: Options(
        headers: {
          "Content-Type": "application/json",
        },
      ),
    );
  }

  @override
  Future<QuestResponse> fetchQuestByOrgID({required int orgId}) async {
    final response = await _dio.get('$BASE_URL/quest/organizationId/$orgId');
    return QuestResponse.fromJson(response.data);
  }

  @override
  Future<QuestResponse> fetchQuestByCID({required String cid}) async {
    final response = await _dio.get('$LIGHTHOUSE_URL${cid.substring(2)}');
    return QuestResponse.fromJson(response.data);
  }

  @override
  Future<QuestResponse> fetchQuestById({required String id}) async {
    final response = await _dio.get('$BASE_URL/quest/$id');
    return QuestResponse.fromJson(response.data);
  }
}
