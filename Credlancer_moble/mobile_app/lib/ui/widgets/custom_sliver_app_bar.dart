import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomSliverAppbar extends StatelessWidget {
  const CustomSliverAppbar({super.key, required this.title, this.bottom});

  final String title;
  final Widget? bottom;

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      expandedHeight: 100 + (bottom != null ? 88 : 0),
      pinned: true,
      floating: true,
      backgroundColor: Theme.of(context).colorScheme.background,
      bottom: bottom != null
          ? PreferredSize(
              preferredSize: const Size.fromHeight(88),
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: bottom!,
              ),
            )
          : null,
      flexibleSpace: FlexibleSpaceBar(
        titlePadding: EdgeInsets.only(bottom: bottom != null ? 88 : 0),
        title: Text(
          title,
          style: GoogleFonts.poppins(
            color: Theme.of(context).colorScheme.onPrimary,
            fontSize: 23,
          ),
        ),
        centerTitle: true,
        expandedTitleScale: 1.7,
        collapseMode: CollapseMode.parallax,
      ),
      elevation: 0,
    );
  }
}
