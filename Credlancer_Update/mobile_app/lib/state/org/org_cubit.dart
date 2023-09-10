import 'package:cred_lancer/models/lancer.dart';
import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/repositories/lancer_repository.dart';
import 'package:cred_lancer/repositories/organization_repository.dart';
import 'package:cred_lancer/repositories/wallet_repository.dart';
import 'package:dartz/dartz.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

part 'org_cubit.freezed.dart';
part 'org_state.dart';

@lazySingleton
class OrgCubit extends Cubit<OrgState> {
  OrgCubit(this._organizationRepository, this._walletRepository)
      : super(OrgState.initial());

  final IWalletRepository _walletRepository;
  final IOrganizationRepository _organizationRepository;

  void setProfile(OrganizationModel profile) {
    emit(state.copyWith(profile: optionOf(right(profile))));
  }

  void getProfile() async {
    emit(state.copyWith(profile: none()));
    try {
      final address = _walletRepository.getUserAddress();
      final profile = await _organizationRepository.findOrganizationByAddress(
          address: address!);
      emit(state.copyWith(profile: optionOf(right(profile!))));
    } catch (e) {
      emit(state.copyWith(profile: optionOf(left(unit))));
    }
  }
}
