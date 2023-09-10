import 'package:freezed_annotation/freezed_annotation.dart';

part 'org_response.freezed.dart';
part 'org_response.g.dart';

@freezed
class OrgResponse with _$OrgResponse {
  const factory OrgResponse({
    required String signature,
    required String nonce,
    String? imageCID,
    String? name,
  }) = _OrgResponse;

  factory OrgResponse.fromJson(Map<String, dynamic> json) =>
      _$OrgResponseFromJson(json);
}
