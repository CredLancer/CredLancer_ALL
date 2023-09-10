import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/state/org/org_cubit.dart';
import 'package:cred_lancer/state/sign_up/sign_up_cubit.dart';
import 'package:cred_lancer/ui/listeners/sign_up_listener.dart';
import 'package:cred_lancer/ui/pages/home_page.dart';
import 'package:cred_lancer/ui/views/sign_up_view.dart';
import 'package:cred_lancer/ui/widgets/msg_bar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class OrgSignUpPage extends StatelessWidget {
  const OrgSignUpPage({super.key});

  @override
  Widget build(BuildContext context) {
    return SignUpListener(
      child: BlocListener<SignUpCubit, SignUpState>(
        bloc: getIt<SignUpCubit>(),
        listenWhen: (previous, current) =>
            previous.openWalletOption != current.openWalletOption,
        listener: (context, state) {
          state.openWalletOption.fold(() => null,
              (_) => context.showMsgBar('Goto Wallet to send transaction.'));
        },
        child: BlocConsumer<SignUpCubit, SignUpState>(
          bloc: getIt<SignUpCubit>(),
          listenWhen: (previous, current) =>
              previous.signUpOption != current.signUpOption,
          listener: (context, state) {
            state.signUpOption.fold(
                () => null,
                (option) => option.fold(
                      (_) =>
                          context.showMsgBar('Error signing up', isError: true),
                      (lancer) {
                        getIt<OrgCubit>().getProfile();
                        Navigator.of(context).pushAndRemoveUntil(
                          CupertinoPageRoute(
                            builder: (context) =>
                                const HomePage(isOrganization: true),
                          ),
                          (route) => false,
                        );
                      },
                    ));
          },
          builder: (context, state) {
            return SignUpView(
              title: 'Organization',
              inputOneLabel: 'Organization Name',
              inputTwoLabel: 'Email',
              inputThreeLabel: 'Description',
              inputFourLabel: 'Country',
              submitButtonLabel: 'Sign Up',
              submitLoading: state.signUpLoading,
              onSubmit: (value) {
                getIt<SignUpCubit>().singUpOrg(
                  name: value.name,
                  email: value.email,
                  description: value.description,
                  country: value.country,
                  imagePath: value.imagePath,
                );
              },
            );
          },
        ),
      ),
    );
  }
}
