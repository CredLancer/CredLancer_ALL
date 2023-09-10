import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/state/lancer/lancer_cubit.dart';
import 'package:cred_lancer/ui/views/dashboard_view.dart';
import 'package:cred_lancer/ui/widgets/app_error_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class LancerDashboardPage extends StatelessWidget {
  const LancerDashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<LancerCubit, LancerState>(
      bloc: getIt<LancerCubit>(),
      builder: (context, state) {
        return state.profile.fold(
          () => Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            appBar: AppBar(
              backgroundColor: Colors.transparent,
              elevation: .0,
              automaticallyImplyLeading: false,
            ),
            body: const Center(child: CircularProgressIndicator()),
          ),
          (fOrS) => fOrS.fold(
            (l) => Scaffold(
              backgroundColor: Theme.of(context).colorScheme.background,
              appBar: AppBar(
                backgroundColor: Colors.transparent,
                elevation: .0,
                automaticallyImplyLeading: false,
              ),
              body: const Center(child: AppErrorWidget()),
            ),
            (lancerProfile) => DashboardView(
              name: lancerProfile.lancer?.name ?? 'Unnamed',
              image: 'https://i.imgur.com/Zl2IGln.jpg',
              description: lancerProfile.lancer?.description ?? 'Some bio.',
              acIdentifier: 'DAD:0x72...375ds8',
              isOrganization: false,
              linkedAccounts: [
                LinkedAccount(
                  image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                  name: 'Github',
                  url: '',
                ),
                LinkedAccount(
                  image:
                      'https://img.freepik.com/free-icon/twitter_318-674515.jpg',
                  name: 'Twitter',
                  url: '',
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
