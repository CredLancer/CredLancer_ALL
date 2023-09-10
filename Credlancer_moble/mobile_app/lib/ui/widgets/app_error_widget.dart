import 'package:cred_lancer/utils/theme.dart';
import 'package:flutter/material.dart';

class AppErrorWidget extends StatelessWidget {
  final String message;
  final VoidCallback? onRetry;

  const AppErrorWidget({
    super.key,
    this.message = 'Something went wrong.',
    this.onRetry,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            message,
            style: TextStyle(
              fontSize: 18.0,
              color: Theme.of(context).colorScheme.error,
            ),
          ),
          const SizedBox(height: 8.0),
          TextButton(
            onPressed: onRetry,
            style: AppStyle.buttonPrimary,
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 8.0),
              child: Text('Retry'),
            ),
          ),
        ],
      ),
    );
  }
}
