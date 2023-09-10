import 'package:json_annotation/json_annotation.dart';

part 'lancer_params.g.dart';

@JsonSerializable()
class LancerParams {
  final String name;
  final String email;
  final String address;
  final String signature;
  final String description;
  @JsonKey(includeFromJson: false, includeToJson: false)
  final String? filePath;

  LancerParams({
    required this.name,
    required this.email,
    required this.address,
    required this.signature,
    required this.description,
    this.filePath,
  });

  factory LancerParams.fromJson(Map<String, dynamic> json) =>
      _$LancerParamsFromJson(json);

  Map<String, dynamic> toJson() => _$LancerParamsToJson(this);
}
