import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/models/quest.dart';
import 'package:cred_lancer/state/lancer/lancer_cubit.dart';
import 'package:cred_lancer/state/quests/quests_cubit.dart';
import 'package:cred_lancer/ui/widgets/custom_sliver_app_bar.dart';
import 'package:cred_lancer/ui/widgets/custom_text_form_field.dart';
import 'package:cred_lancer/ui/widgets/msg_bar.dart';
import 'package:cred_lancer/utils/theme.dart';
import 'package:date_field/date_field.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestProposalPage extends StatefulWidget {
  const QuestProposalPage({
    Key? key,
    required this.quest,
  }) : super(key: key);

  final QuestResponse quest;

  @override
  _QuestProposalPageState createState() => _QuestProposalPageState();
}

class _QuestProposalPageState extends State<QuestProposalPage> {
  final formKey = GlobalKey<FormState>();
  final _unfocusNode = FocusNode();
  late final TextEditingController _questCompletionController;
  DateTime? deadline;

  @override
  void initState() {
    super.initState();
    _questCompletionController = TextEditingController();
  }

  @override
  void dispose() {
    _unfocusNode.dispose();
    _questCompletionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<QuestsCubit, QuestsState>(
      bloc: getIt<QuestsCubit>(),
      listenWhen: (previous, current) =>
          previous.proposalOption != current.proposalOption,
      listener: (context, state) {
        state.proposalOption.fold(
            () => null,
            (a) => a.fold((l) => null,
                (r) => context.showMsgBar('Proposal Created Successfully')));
      },
      builder: (context, state) {
        final lancer = getIt<LancerCubit>().state.profile.fold(
            () => throw Exception('Lancer profile not found'),
            (v) => v.fold(
                (l) => throw Exception('Lancer profile not found'), (r) => r));
        return GestureDetector(
          onTap: () => FocusScope.of(context).requestFocus(_unfocusNode),
          child: Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            body: NestedScrollView(
              headerSliverBuilder: (context, _) => [
                const CustomSliverAppbar(title: 'Quest Proposal'),
              ],
              body: SafeArea(
                child: Padding(
                  padding: const EdgeInsetsDirectional.fromSTEB(16, 16, 16, 16),
                  child: SingleChildScrollView(
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Form(
                          key: formKey,
                          autovalidateMode: AutovalidateMode.disabled,
                          child: Column(
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              CustomTextField(
                                controller: _questCompletionController,
                                textInputAction: TextInputAction.done,
                                topLabel: true,
                                label: 'How will you complete this quest?',
                                maxLines: 10,
                              ),
                              const SizedBox(height: 16.0),
                              Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(40.0),
                                  color: Theme.of(context).colorScheme.tertiary,
                                ),
                                child: DateTimeFormField(
                                  decoration: InputDecoration(
                                    labelText: 'Required Time',
                                    labelStyle: GoogleFonts.lexendDeca(
                                      color: Theme.of(context)
                                          .colorScheme
                                          .onTertiary,
                                      fontSize: 14,
                                      fontWeight: FontWeight.normal,
                                    ),
                                    hintStyle: GoogleFonts.lexendDeca(
                                      color: Theme.of(context)
                                          .colorScheme
                                          .onTertiary,
                                      fontSize: 14,
                                      fontWeight: FontWeight.normal,
                                    ),
                                    enabledBorder: InputBorder.none,
                                    focusedBorder: InputBorder.none,
                                    errorBorder: InputBorder.none,
                                    focusedErrorBorder: InputBorder.none,
                                    filled: false,
                                    contentPadding:
                                        const EdgeInsetsDirectional.fromSTEB(
                                            24, 24, 24, 24),
                                    suffixIcon: Padding(
                                      padding:
                                          const EdgeInsets.only(right: 16.0),
                                      child: Icon(
                                        Icons.event_note,
                                        color: Theme.of(context)
                                            .colorScheme
                                            .onTertiary,
                                      ),
                                    ),
                                  ),
                                  dateTextStyle: TextStyle(
                                    color: Theme.of(context)
                                        .colorScheme
                                        .onTertiaryContainer,
                                    fontSize: 14,
                                    fontWeight: FontWeight.normal,
                                  ),
                                  mode: DateTimeFieldPickerMode.dateAndTime,
                                  autovalidateMode: AutovalidateMode.always,
                                  validator: (e) => (e?.day ?? 0) == 1
                                      ? 'Please not the first day'
                                      : null,
                                  onDateSelected: (value) {
                                    setState(() {
                                      deadline = value;
                                    });
                                  },
                                ),
                              ),
                              const SizedBox(height: 16.0),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            bottomNavigationBar: SafeArea(
              child: Container(
                color: Theme.of(context).colorScheme.background,
                padding: const EdgeInsetsDirectional.fromSTEB(
                    16.0, 16.0, 16.0, 24.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Expanded(
                      child: SizedBox(
                        height: 55.0,
                        child: TextButton(
                          onPressed: state.proposalLoading
                              ? null
                              : () {
                                  getIt<QuestsCubit>()
                                      .createProposal(QuestProposalType(
                                    id: '0x1',
                                    proposer: QuestProposer(
                                      address: lancer.lancer!.address,
                                      name: lancer.lancer!.name!,
                                      email: lancer.lancer!.email!,
                                      description: lancer.lancer!.description!,
                                      imageCID: lancer.lancer!.imageCID!,
                                      nonce: '0xF',
                                      registered: lancer.lancer!.registered,
                                    ),
                                    blockNumber: 0,
                                    file: QuestProposalFile(
                                      description:
                                          _questCompletionController.text,
                                      approxCompletionTime:
                                          '${deadline?.millisecondsSinceEpoch}',
                                      cid: '0x0',
                                    ),
                                    status: ProposalStatus.Proposed,
                                    questId: widget.quest.id,
                                    fileCID: '0x0',
                                  ));
                                },
                          style: AppStyle.buttonPrimary,
                          child: state.proposalLoading
                              ? const SizedBox(
                                  height: 20.0,
                                  width: 20.0,
                                  child: Center(
                                      child: CircularProgressIndicator(
                                          strokeWidth: 2.5)),
                                )
                              : const Text(
                                  'Create',
                                  style: TextStyle(
                                    fontSize: 22.0,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
