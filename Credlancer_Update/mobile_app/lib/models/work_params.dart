import 'package:json_annotation/json_annotation.dart';

part 'work_params.g.dart';

@JsonSerializable()
class WorkParams {
  final String address;
  final String signature;
  final String cid;

  WorkParams({
    required this.address,
    required this.signature,
    required this.cid,
  });

  factory WorkParams.fromJson(Map<String, dynamic> json) =>
      _$WorkParamsFromJson(json);

  Map<String, dynamic> toJson() => _$WorkParamsToJson(this);
}
