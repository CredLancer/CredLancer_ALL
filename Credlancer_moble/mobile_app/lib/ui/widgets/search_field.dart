import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class SearchField extends StatelessWidget {
  const SearchField({
    super.key,
    required this.controller,
    required this.label,
    required this.enableClearButton,
    this.validator,
    this.maxLines = 1,
    this.topLabel = false,
  });

  final TextEditingController controller;
  final String label;
  final bool enableClearButton;
  final String? Function(String?)? validator;
  final int maxLines;
  final bool topLabel;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(40.0),
        color: Theme.of(context).colorScheme.onPrimary,
      ),
      child: Row(
        children: [
          Padding(
            padding: const EdgeInsetsDirectional.fromSTEB(24.0, 16.0, .0, 16.0),
            child: Icon(
              EvaIcons.searchOutline,
              color: Theme.of(context).colorScheme.onTertiary,
            ),
          ),
          Expanded(
            child: TextFormField(
              controller: controller,
              obscureText: false,
              textAlignVertical: TextAlignVertical.center,
              decoration: InputDecoration(
                labelText: topLabel ? null : label,
                labelStyle: GoogleFonts.lexendDeca(
                  color: Theme.of(context).colorScheme.onTertiary,
                  fontSize: 14,
                  fontWeight: FontWeight.normal,
                ),
                hintStyle: GoogleFonts.lexendDeca(
                  color: Theme.of(context).colorScheme.onTertiary,
                  fontSize: 14,
                  fontWeight: FontWeight.normal,
                ),
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                errorBorder: InputBorder.none,
                focusedErrorBorder: InputBorder.none,
                filled: false,
                contentPadding:
                    const EdgeInsetsDirectional.fromSTEB(16.0, 8.0, 24.0, 8.0),
              ),
              style: GoogleFonts.lexendDeca(
                color: Theme.of(context).colorScheme.onTertiaryContainer,
                fontSize: 14,
                fontWeight: FontWeight.normal,
              ),
              maxLines: maxLines,
              validator: validator,
            ),
          ),
          if (enableClearButton)
            IconButton(
              onPressed: () {
                controller.clear();
              },
              icon: Icon(
                EvaIcons.close,
                color: Theme.of(context).colorScheme.onTertiary,
              ),
            )
        ],
      ),
    );
  }
}
