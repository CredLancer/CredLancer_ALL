import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/state/lancer/lancer_cubit.dart';
import 'package:cred_lancer/state/org/org_cubit.dart';
import 'package:cred_lancer/state/sign_up/sign_up_cubit.dart';
import 'package:cred_lancer/ui/pages/home_page.dart';
import 'package:cred_lancer/ui/pages/user_type_page.dart';
import 'package:cred_lancer/ui/views/onboarding_view.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class OnboardingPage extends StatelessWidget {
  const OnboardingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<SignUpCubit, SignUpState>(
      bloc: getIt<SignUpCubit>(),
      listenWhen: (previous, current) =>
          previous.isWalletConnected != current.isWalletConnected,
      listener: (context, state) {
        if (state.isWalletConnected) {
          state.userType.map(
            none: (_) {},
            newUser: (_) {
              Navigator.pushReplacement(context,
                  CupertinoPageRoute(builder: (_) => const UserTypePage()));
            },
            org: (v) {
              getIt<OrgCubit>().setProfile(v.org!);
              Navigator.pushReplacement(
                  context,
                  CupertinoPageRoute(
                      builder: (_) => const HomePage(isOrganization: true)));
            },
            lancer: (v) {
              getIt<LancerCubit>().setProfile(v.lancer!);
              Navigator.pushReplacement(
                  context,
                  CupertinoPageRoute(
                      builder: (_) => const HomePage(isOrganization: false)));
            },
          );
        }
      },
      builder: (context, state) {
        return OnboardingView(
          onConnectWallet: () {
            getIt<SignUpCubit>().connectWallet();
          },
          connectLoading: state.connectLoading,
        );
      },
    );
  }
}
