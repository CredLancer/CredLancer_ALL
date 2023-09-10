import 'dart:io';

import 'package:cred_lancer/models/sign_up_form_data.dart';
import 'package:cred_lancer/ui/widgets/custom_sliver_app_bar.dart';
import 'package:cred_lancer/ui/widgets/custom_text_form_field.dart';
import 'package:cred_lancer/utils/theme.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:image_picker/image_picker.dart';

class SignUpView extends StatefulWidget {
  const SignUpView({
    Key? key,
    required this.title,
    required this.inputOneLabel,
    required this.inputTwoLabel,
    required this.inputThreeLabel,
    required this.inputFourLabel,
    required this.submitButtonLabel,
    required this.submitLoading,
    required this.onSubmit,
  }) : super(key: key);

  final String title;
  final String inputOneLabel;
  final String inputTwoLabel;
  final String inputThreeLabel;
  final String inputFourLabel;
  final String submitButtonLabel;
  final bool submitLoading;
  final void Function(SignUpFormData) onSubmit;

  @override
  _SignUpViewState createState() => _SignUpViewState();
}

class _SignUpViewState extends State<SignUpView> {
  final formKey = GlobalKey<FormState>();
  final _unfocusNode = FocusNode();
  late final TextEditingController _nameController,
      _emailController,
      _descriptionController;
  String? country;
  String? imagePath;

  final countries = [
    "USA",
    "Mexico",
    "India",
    "Nigeria",
    "Sudan",
    "Peru",
    "Brazil",
    "China",
    "Japan",
    "Russia",
    "Germany"
  ];

  @override
  void initState() {
    super.initState();
    if (kDebugMode) {
      // DUMMY Data for testing
      _nameController = TextEditingController(text: 'Test Name');
      _emailController = TextEditingController(text: 'test@email.com');
      _descriptionController = TextEditingController(
          text: 'Test Description Something Something Something');
      country = 'India';
    } else {
      _nameController = TextEditingController();
      _emailController = TextEditingController();
      _descriptionController = TextEditingController();
    }
  }

  @override
  void dispose() {
    _unfocusNode.dispose();
    _nameController.dispose();
    _emailController.dispose();
    _descriptionController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).requestFocus(_unfocusNode),
      child: Scaffold(
        backgroundColor: Theme.of(context).colorScheme.background,
        body: NestedScrollView(
          headerSliverBuilder: (context, _) => [
            CustomSliverAppbar(title: widget.title),
          ],
          body: SafeArea(
            child: Padding(
              padding: const EdgeInsetsDirectional.fromSTEB(16, 16, 16, 16),
              child: SingleChildScrollView(
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    InkWell(
                      onTap: () async {
                        final XFile? image = await ImagePicker()
                            .pickImage(source: ImageSource.gallery);
                        setState(() {
                          imagePath = image?.path;
                        });
                      },
                      customBorder: const CircleBorder(),
                      child: CircleAvatar(
                        radius: 88.0,
                        backgroundColor: Colors.grey.shade300,
                        foregroundImage: (imagePath?.isEmpty ?? true)
                            ? null
                            : FileImage(File(imagePath!)),
                        child: (imagePath?.isEmpty ?? true)
                            ? const Icon(
                                EvaIcons.personOutline,
                                size: 72.0,
                              )
                            : null,
                      ),
                    ),
                    const SizedBox(height: 24.0),
                    Form(
                      key: formKey,
                      autovalidateMode: AutovalidateMode.disabled,
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          CustomTextField(
                            controller: _nameController,
                            label: widget.inputOneLabel,
                            textInputAction: TextInputAction.next,
                            maxLines: 1,
                          ),
                          const SizedBox(height: 16.0),
                          CustomTextField(
                            controller: _emailController,
                            label: widget.inputTwoLabel,
                            textInputAction: TextInputAction.next,
                            maxLines: 1,
                          ),
                          const SizedBox(height: 16.0),
                          CustomTextField(
                            topLabel: true,
                            controller: _descriptionController,
                            label: widget.inputThreeLabel,
                            textInputAction: TextInputAction.done,
                            maxLines: 5,
                          ),
                          const SizedBox(height: 16.0),
                          Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(40.0),
                              color: Theme.of(context).colorScheme.onPrimary,
                            ),
                            child: DropdownButtonHideUnderline(
                              child: DropdownButtonFormField(
                                decoration: InputDecoration(
                                  contentPadding:
                                      const EdgeInsetsDirectional.fromSTEB(
                                          24, 16, 24, 16),
                                  labelText: widget.inputFourLabel,
                                  labelStyle: GoogleFonts.lexendDeca(
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
                                ),
                                value: country,
                                dropdownColor:
                                    Theme.of(context).colorScheme.onPrimary,
                                borderRadius: BorderRadius.circular(40.0),
                                items: countries
                                    .map((e) => DropdownMenuItem(
                                          value: e,
                                          child: Text(
                                            e,
                                            style: GoogleFonts.lexendDeca(
                                              color: Theme.of(context)
                                                  .colorScheme
                                                  .onTertiaryContainer,
                                              fontSize: 14,
                                              fontWeight: FontWeight.normal,
                                            ),
                                          ),
                                        ))
                                    .toList(),
                                onChanged: ((value) {
                                  if (value != null) {
                                    setState(() {
                                      country = value;
                                    });
                                  }
                                }),
                              ),
                            ),
                          ),
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
            padding:
                const EdgeInsetsDirectional.fromSTEB(16.0, 16.0, 16.0, 24.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                  child: SizedBox(
                    height: 55.0,
                    child: TextButton(
                      onPressed: widget.submitLoading
                          ? null
                          : () => widget.onSubmit(SignUpFormData(
                                name: _nameController.text,
                                email: _emailController.text,
                                description: _descriptionController.text,
                                country: country ?? '',
                                imagePath: imagePath ?? '',
                              )),
                      style: AppStyle.buttonPrimary,
                      child: widget.submitLoading
                          ? const SizedBox(
                              height: 20.0,
                              width: 20.0,
                              child: Center(
                                  child: CircularProgressIndicator(
                                      strokeWidth: 2.5)),
                            )
                          : const Text(
                              'Sign Up',
                              style: TextStyle(
                                fontSize: 21.0,
                                letterSpacing: 0.7,
                                fontWeight: FontWeight.bold,
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
  }
}
