import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomTextField extends StatelessWidget {
  const CustomTextField({
    super.key,
    required this.controller,
    required this.label,
    required this.textInputAction,
    this.validator,
    this.maxLines = 1,
    this.topLabel = false,
  });

  final TextEditingController controller;
  final TextInputAction textInputAction;
  final String label;
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
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (topLabel)
            Padding(
              padding:
                  const EdgeInsetsDirectional.fromSTEB(24.0, 24.0, 24.0, 8.0),
              child: Text(
                label,
                style: GoogleFonts.lexendDeca(
                  color: Theme.of(context).colorScheme.onTertiary,
                  fontSize: 14,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
          TextFormField(
            controller: controller,
            obscureText: false,
            textAlignVertical: TextAlignVertical.center,
            textInputAction: textInputAction,
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
                  const EdgeInsetsDirectional.fromSTEB(24, 16, 24, 16),
            ),
            style: GoogleFonts.lexendDeca(
              color: Theme.of(context).colorScheme.onTertiaryContainer,
              fontSize: 14,
              fontWeight: FontWeight.normal,
            ),
            maxLines: maxLines,
            validator: validator,
          ),
        ],
      ),
    );
  }
}
