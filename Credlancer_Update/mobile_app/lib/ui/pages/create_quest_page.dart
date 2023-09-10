import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/models/quest.dart';
import 'package:cred_lancer/state/quests/quests_cubit.dart';
import 'package:cred_lancer/ui/widgets/custom_sliver_app_bar.dart';
import 'package:cred_lancer/ui/widgets/custom_text_form_field.dart';
import 'package:cred_lancer/ui/widgets/msg_bar.dart';
import 'package:cred_lancer/utils/theme.dart';
import 'package:date_field/date_field.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:google_fonts/google_fonts.dart';

class CreateQuestPage extends StatefulWidget {
  const CreateQuestPage({
    Key? key,
  }) : super(key: key);

  @override
  _CreateQuestPageState createState() => _CreateQuestPageState();
}

class _CreateQuestPageState extends State<CreateQuestPage> {
  final formKey = GlobalKey<FormState>();
  final _unfocusNode = FocusNode();
  late final TextEditingController _titleController,
      _hoursRequiredController,
      _descriptionController,
      _questRewardController;
  DateTime? deadline;

  @override
  void initState() {
    super.initState();
    _titleController = TextEditingController();
    _hoursRequiredController = TextEditingController();
    _descriptionController = TextEditingController();
    _questRewardController = TextEditingController();
  }

  @override
  void dispose() {
    _unfocusNode.dispose();
    _titleController.dispose();
    _hoursRequiredController.dispose();
    _descriptionController.dispose();
    _questRewardController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BlocConsumer<QuestsCubit, QuestsState>(
      bloc: getIt<QuestsCubit>(),
      listenWhen: (previous, current) =>
          previous.createQuestOption != current.createQuestOption,
      listener: (context, state) {
        state.createQuestOption.fold(
            () => null,
            (a) => a.fold((l) => null,
                (r) => context.showMsgBar('Quest Created Successfully')));
      },
      builder: (context, state) {
        return GestureDetector(
          onTap: () => FocusScope.of(context).requestFocus(_unfocusNode),
          child: Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            body: NestedScrollView(
              headerSliverBuilder: (context, _) => [
                const CustomSliverAppbar(title: 'Create Quest'),
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
                                controller: _titleController,
                                textInputAction: TextInputAction.next,
                                label: 'Title',
                                maxLines: 1,
                              ),
                              const SizedBox(height: 16.0),
                              CustomTextField(
                                controller: _hoursRequiredController,
                                textInputAction: TextInputAction.next,
                                label: 'Hours Required',
                                maxLines: 1,
                              ),
                              const SizedBox(height: 16.0),
                              Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(40.0),
                                  color: Theme.of(context).colorScheme.tertiary,
                                ),
                                child: DateTimeFormField(
                                  decoration: InputDecoration(
                                    labelText: 'Deadline',
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
                              CustomTextField(
                                controller: _descriptionController,
                                textInputAction: TextInputAction.next,
                                label: 'Description',
                                maxLines: 5,
                              ),
                              const SizedBox(height: 16.0),
                              CustomTextField(
                                controller: _questRewardController,
                                textInputAction: TextInputAction.done,
                                label: 'Quest Reward',
                                maxLines: 1,
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
                          onPressed: () {},
                          style: AppStyle.buttonSecondary,
                          child: const Text(
                            'Upload File',
                            style: TextStyle(
                              fontSize: 20.0,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 16.0),
                    Expanded(
                      child: SizedBox(
                        height: 55.0,
                        child: TextButton(
                          onPressed: state.createLoading
                              ? null
                              : () {
                                  getIt<QuestsCubit>()
                                      .createQuest(QuestResponse(
                                    title: _titleController.text,
                                    description: _descriptionController.text,
                                    image: '',
                                    id: 99,
                                    questCID: '0x0',
                                    status: 'proposed',
                                    orgId: 1,
                                    value: 330,
                                  ));
                                },
                          style: AppStyle.buttonPrimary,
                          child: state.createLoading
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
                                    fontSize: 20.0,
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
