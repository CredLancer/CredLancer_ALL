import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/state/org/org_cubit.dart';
import 'package:cred_lancer/ui/views/dashboard_view.dart';
import 'package:cred_lancer/ui/widgets/app_error_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class OrgDashboardPage extends StatelessWidget {
  const OrgDashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<OrgCubit, OrgState>(
      bloc: getIt<OrgCubit>(),
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
            (profile) => DashboardView(
              name: profile.name ?? 'Unnamed Org',
              image: 'https://i.imgur.com/0XmU4lc.jpg',
              description: profile.description ?? 'Some bio.',
              acIdentifier: 'DAD:0x72...d47s8',
              isOrganization: true,
              linkedAccounts: [
                LinkedAccount(
                  image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
                  name: 'Github',
                  url: '',
                ),
                LinkedAccount(
                  image:
                      'https://cdn-icons-png.flaticon.com/512/174/174857.png',
                  name: 'LinkedIn',
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
