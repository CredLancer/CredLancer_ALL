import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  const AppTheme._();

  static final darkTheme = ThemeData.dark().copyWith(
    colorScheme: const ColorScheme.dark().copyWith(
      primary: Color(0xFFF57366),
      onPrimary: Color(0xFFFFFFFF),
      secondary: Color(0xFF8CE0A2),
      onSecondary: Color(0xFFFFFFFF),
      tertiary: Color(0xFFFFFFFF),
      onTertiary: Color(0xFF57636C),
      tertiaryContainer: Color(0xFFFFFFFF),
      onTertiaryContainer: Color(0xFF1D2429),
      background: Color(0xFF1D2549),
      onBackground: Color(0xFFFFFFFF),
    ),
  );
}

class AppStyle {
  const AppStyle._();

  static final buttonPrimary = TextButton.styleFrom(
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(40.0),
    ),
    disabledBackgroundColor: Color(0xFFF57366).withOpacity(0.5),
    disabledForegroundColor: Color(0xFFFFFFFF),
    backgroundColor: Color(0xFFF57366),
    foregroundColor: Color(0xFFFFFFFF),
    textStyle: GoogleFonts.poppins(),
  );

  static final buttonSecondary = TextButton.styleFrom(
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(40.0),
    ),
    backgroundColor: Color(0xFF8CE0A2),
    foregroundColor: Color(0xFFFFFFFF),
    textStyle: GoogleFonts.poppins(),
  );
}
