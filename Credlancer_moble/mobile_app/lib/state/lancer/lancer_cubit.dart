import 'package:cred_lancer/models/lancer.dart';
import 'package:cred_lancer/repositories/lancer_repository.dart';
import 'package:cred_lancer/repositories/wallet_repository.dart';
import 'package:dartz/dartz.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:injectable/injectable.dart';

part 'lancer_cubit.freezed.dart';
part 'lancer_state.dart';

@lazySingleton
class LancerCubit extends Cubit<LancerState> {
  LancerCubit(this._lancerRepository, this._walletRepository)
      : super(LancerState.initial());

  final IWalletRepository _walletRepository;
  final ILancerRepository _lancerRepository;

  void setProfile(LancerSignatureProfile profile) {
    emit(state.copyWith(profile: optionOf(right(profile))));
  }

  void getProfile() async {
    emit(state.copyWith(profile: none()));
    try {
      final address = _walletRepository.getUserAddress();
      final profile = await _lancerRepository.fetchLancer(address: address!);
      emit(state.copyWith(profile: optionOf(right(profile!))));
    } catch (e) {
      emit(state.copyWith(profile: optionOf(left(unit))));
    }
  }
}
