import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/state/sign_up/sign_up_cubit.dart';
import 'package:cred_lancer/ui/pages/onboarding_page.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class SignUpListener extends StatelessWidget {
  const SignUpListener({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    return BlocListener<SignUpCubit, SignUpState>(
      bloc: getIt<SignUpCubit>(),
      listenWhen: (previous, current) =>
          previous.isWalletConnected != current.isWalletConnected,
      listener: (context, state) {
        if (!state.isWalletConnected) {
          state.userType.maybeMap(
              none: (_) {
                Navigator.pushAndRemoveUntil(
                    context,
                    CupertinoPageRoute(builder: (_) => const OnboardingPage()),
                    (route) => false);
              },
              orElse: () {});
        }
      },
      child: child,
    );
  }
}
