import 'package:cred_lancer/models/lancer.dart';
import 'package:cred_lancer/models/lancer_params.dart';
import 'package:cred_lancer/utils/constants.dart';
import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart' show debugPrint;
import 'package:http_parser/http_parser.dart';
import 'package:injectable/injectable.dart';

abstract class ILancerRepository {
  Future<LancerSignatureProfile?> fetchLancer({required String address});
  Future<dynamic> createLancerProfile({required LancerParams params});
}

@LazySingleton(as: ILancerRepository)
class LancerRepository implements ILancerRepository {
  final Dio _dio;

  LancerRepository(this._dio);

  @override
  Future<LancerSignatureProfile?> fetchLancer({required String address}) async {
    try {
      final response = await _dio.get('$BASE_URL/lancer/$address');
      return LancerSignatureProfile.fromJson(response.data);
    } on DioError catch (e) {
      debugPrint('Error: ${e.response?.data} ${e.message}');
    }
    return null;
  }

  @override
  Future<dynamic> createLancerProfile({required LancerParams params}) async {
    try {
      final formData = FormData.fromMap({
        ...params.toJson(),
        'image': await MultipartFile.fromFile(
          params.filePath!,
          contentType: MediaType('image', 'jpg'),
        ),
      });
      final response = await _dio.post(
        '$BASE_URL/lancer/register',
        data: formData,
      );
      return response.data;
    } on DioError catch (e) {
      debugPrint('Error: ${e.response?.data}');
    }
    return null;
  }
}
