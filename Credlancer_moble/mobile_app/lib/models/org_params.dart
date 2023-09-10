import 'package:json_annotation/json_annotation.dart';

part 'org_params.g.dart';

@JsonSerializable()
class OrgParams {
  final String name;
  final String admin;
  final String description;
  final String email;
  final String signature;
  @JsonKey(includeFromJson: false, includeToJson: false)
  final String? filePath;

  OrgParams({
    required this.name,
    required this.admin,
    required this.description,
    required this.email,
    required this.signature,
    this.filePath,
  });

  factory OrgParams.fromJson(Map<String, dynamic> json) =>
      _$OrgParamsFromJson(json);

  Map<String, dynamic> toJson() => _$OrgParamsToJson(this);
}
