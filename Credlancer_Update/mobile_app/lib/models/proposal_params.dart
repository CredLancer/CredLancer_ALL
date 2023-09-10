import 'package:json_annotation/json_annotation.dart';

part 'proposal_params.g.dart';

@JsonSerializable()
class ProposalParams {
  final String proposer;
  final String approxCompletionTime;
  final String signature;
  final String descripton;

  ProposalParams({
    required this.proposer,
    required this.approxCompletionTime,
    required this.signature,
    required this.descripton,
  });

  factory ProposalParams.fromJson(Map<String, dynamic> json) =>
      _$ProposalParamsFromJson(json);

  Map<String, dynamic> toJson() => _$ProposalParamsToJson(this);
}
