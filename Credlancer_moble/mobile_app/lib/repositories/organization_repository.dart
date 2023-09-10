import 'package:cred_lancer/models/org_params.dart';
import 'package:cred_lancer/models/org_response.dart';
import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/repositories/data_repository.dart';
import 'package:cred_lancer/utils/constants.dart';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart' show debugPrint;
import 'package:injectable/injectable.dart';
import 'package:http_parser/http_parser.dart';

abstract class IOrganizationRepository {
  Future<OrgResponse?> createOrganizationProfile({required OrgParams params});
  Future<OrganizationModel?> findOrganizationByAddress(
      {required String address});
  Future<OrganizationModel?> findOrganizationById({required int orgId});
}

@LazySingleton(as: IOrganizationRepository)
class OrganizationRepository implements IOrganizationRepository {
  final Dio _dio;

  OrganizationRepository(this._dio);

  @override
  Future<OrgResponse?> createOrganizationProfile(
      {required OrgParams params}) async {
    try {
      final formData = FormData.fromMap({
        ...params.toJson(),
        'image': await MultipartFile.fromFile(
          params.filePath!,
          contentType: MediaType('image', 'jpg'),
        ),
      });
      final response = await _dio.post(
        '$BASE_URL/organization',
        data: formData,
      );
      return OrgResponse.fromJson(response.data);
    } on DioError catch (e) {
      debugPrint('Error: ${e.message} ${e.response?.data}');
    }
    return null;
  }

  @override
  Future<OrganizationModel?> findOrganizationByAddress(
      {required String address}) async {
    try {
      final response = await _dio.get('$BASE_URL/organization/admin/$address');
      return response.data;
    } on DioError catch (e) {
      debugPrint('Error: ${e.response?.data}');
    }
    return DataRepository.org[0].admin == address
        ? DataRepository.org[0]
        : null;
  }

  @override
  Future<OrganizationModel?> findOrganizationById({required int orgId}) async {
    final response = await _dio.get('$BASE_URL/organization/$orgId');
    return response.data;
  }
}
