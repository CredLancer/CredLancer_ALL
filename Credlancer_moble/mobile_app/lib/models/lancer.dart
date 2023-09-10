import 'package:freezed_annotation/freezed_annotation.dart';

part 'lancer.freezed.dart';
part 'lancer.g.dart';

@freezed
class LancerSignatureProfile with _$LancerSignatureProfile {
  const factory LancerSignatureProfile({
    required bool registered,
    String? message,
    LancerModel? lancer,
  }) = _LancerSignatureProfile;

  factory LancerSignatureProfile.fromJson(Map<String, dynamic> json) =>
      _$LancerSignatureProfileFromJson(json);
}

@freezed
class LancerModel with _$LancerModel {
  const factory LancerModel({
    required String address,
    required String nonce,
    String? imageCID,
    String? name,
    String? email,
    String? description,
    required bool registered,
  }) = _LancerModel;

  factory LancerModel.fromJson(Map<String, dynamic> json) =>
      _$LancerModelFromJson(json);
}
