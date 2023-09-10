import 'package:cred_lancer/app.dart';
import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/repositories/wallet_repository.dart';
import 'package:cred_lancer/state/lancer/lancer_cubit.dart';
import 'package:cred_lancer/state/org/org_cubit.dart';
import 'package:cred_lancer/state/quests/quests_cubit.dart';
import 'package:cred_lancer/state/sign_up/sign_up_cubit.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  configureDependencies();

  await Hive.initFlutter();
  await getIt<IWalletRepository>().init();

  getIt<QuestsCubit>().started();
  final userType = await getIt<SignUpCubit>().getUserType();
  userType.maybeMap(
    orElse: () {},
    lancer: (v) {
      getIt<SignUpCubit>().updateWallet();
      getIt<LancerCubit>().setProfile(v.lancer!);
    },
    org: (v) {
      getIt<SignUpCubit>().updateWallet();
      getIt<OrgCubit>().setProfile(v.org!);
    },
  );

  runApp(App(userType: userType));
}
