import 'package:flutter/material.dart';

extension MsgBar on BuildContext {
  void showMsgBar(
    String msg, {
    bool isError = false,
  }) {
    final colorScheme = Theme.of(this).colorScheme;

    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(
        elevation: 0,
        backgroundColor: Colors.white,
        content: Container(
          alignment: Alignment.center,
          height: 50.0,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(48.0),
            color: isError
                ? Colors.red.shade300
                : colorScheme.secondary.withOpacity(0.4),
          ),
          child: Text(
            msg,
            style: Theme.of(this).textTheme.bodyLarge!.copyWith(
                  fontWeight: FontWeight.bold,
                  fontSize: 18.0,
                  color: isError ? Colors.white : colorScheme.secondary,
                ),
          ),
        ),
        behavior: SnackBarBehavior.floating,
        margin: const EdgeInsets.all(16.0),
        padding: EdgeInsets.zero,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(48.0),
        ),
      ),
    );
  }
}
