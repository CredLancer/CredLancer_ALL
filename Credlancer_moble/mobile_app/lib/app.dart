import 'package:cred_lancer/state/sign_up/sign_up_cubit.dart';
import 'package:cred_lancer/ui/pages/home_page.dart';
import 'package:cred_lancer/ui/pages/onboarding_page.dart';
import 'package:cred_lancer/ui/pages/user_type_page.dart';
import 'package:cred_lancer/utils/theme.dart';
import 'package:flutter/material.dart';

class App extends StatelessWidget {
  const App({super.key, required this.userType});

  final UserType userType;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CredLancer',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      home: userType.map(
        none: (_) => const OnboardingPage(),
        newUser: (_) => const UserTypePage(),
        org: (_) => const HomePage(isOrganization: true),
        lancer: (v) => const HomePage(isOrganization: false),
      ),
    );
  }
}
