// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// InjectableConfigGenerator
// **************************************************************************

// ignore_for_file: unnecessary_lambdas
// ignore_for_file: lines_longer_than_80_chars
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:dio/dio.dart' as _i3;
import 'package:get_it/get_it.dart' as _i1;
import 'package:injectable/injectable.dart' as _i2;

import 'injectable_module.dart' as _i13;
import 'repositories/lancer_repository.dart' as _i4;
import 'repositories/organization_repository.dart' as _i5;
import 'repositories/proposal_repository.dart' as _i6;
import 'repositories/quest_repository.dart' as _i7;
import 'repositories/wallet_repository.dart' as _i8;
import 'state/lancer/lancer_cubit.dart' as _i9;
import 'state/org/org_cubit.dart' as _i10;
import 'state/quests/quests_cubit.dart' as _i11;
import 'state/sign_up/sign_up_cubit.dart' as _i12;

extension GetItInjectableX on _i1.GetIt {
  // initializes the registration of main-scope dependencies inside of GetIt
  _i1.GetIt init({
    String? environment,
    _i2.EnvironmentFilter? environmentFilter,
  }) {
    final gh = _i2.GetItHelper(
      this,
      environment,
      environmentFilter,
    );
    final injectableModule = _$InjectableModule();
    gh.factory<_i3.Dio>(() => injectableModule.dio);
    gh.lazySingleton<_i4.ILancerRepository>(
        () => _i4.LancerRepository(gh<_i3.Dio>()));
    gh.lazySingleton<_i5.IOrganizationRepository>(
        () => _i5.OrganizationRepository(gh<_i3.Dio>()));
    gh.lazySingleton<_i6.IProposalRepository>(
        () => _i6.ProposalRepository(gh<_i3.Dio>()));
    gh.lazySingleton<_i7.IQuestRepository>(
        () => _i7.QuestRepository(gh<_i3.Dio>()));
    gh.lazySingleton<_i8.IWalletRepository>(() => _i8.WalletRepository());
    gh.lazySingleton<_i9.LancerCubit>(() => _i9.LancerCubit(
          gh<_i4.ILancerRepository>(),
          gh<_i8.IWalletRepository>(),
        ));
    gh.lazySingleton<_i10.OrgCubit>(() => _i10.OrgCubit(
          gh<_i5.IOrganizationRepository>(),
          gh<_i8.IWalletRepository>(),
        ));
    gh.lazySingleton<_i11.QuestsCubit>(() => _i11.QuestsCubit());
    gh.lazySingleton<_i12.SignUpCubit>(() => _i12.SignUpCubit(
          gh<_i8.IWalletRepository>(),
          gh<_i5.IOrganizationRepository>(),
          gh<_i4.ILancerRepository>(),
        ));
    return this;
  }
}

class _$InjectableModule extends _i13.InjectableModule {}
