import 'package:cached_network_image/cached_network_image.dart';
import 'package:cred_lancer/utils/theme.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestCard extends StatelessWidget {
  const QuestCard({
    super.key,
    required this.name,
    required this.description,
    required this.title,
    required this.image,
    required this.price,
    required this.liked,
    required this.isApplied,
    required this.onApply,
    required this.onUpdate,
    required this.onView,
    required this.onLiked,
  });

  final String name;
  final String description;
  final String title;
  final String image;
  final String price;
  final bool liked;
  final bool isApplied;
  final VoidCallback onApply;
  final VoidCallback onUpdate;
  final VoidCallback onView;
  final VoidCallback onLiked;

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(32.0),
      ),
      color: Theme.of(context).colorScheme.onBackground,
      elevation: .0,
      child: SizedBox(
        height: 200.0,
        child: Row(
          children: [
            SizedBox(
              width: 130.0,
              child: Center(
                child: CachedNetworkImage(
                  imageUrl: image,
                  errorWidget: (context, url, error) => Container(
                    width: double.infinity,
                    height: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: const BorderRadius.only(
                        topLeft: Radius.circular(32.0),
                        bottomLeft: Radius.circular(32.0),
                      ),
                      color: Colors.grey.shade300,
                    ),
                  ),
                  imageBuilder: (_, imgProvider) => Container(
                    decoration: BoxDecoration(
                      borderRadius: const BorderRadius.only(
                        topLeft: Radius.circular(32.0),
                        bottomLeft: Radius.circular(32.0),
                      ),
                      color: Colors.grey.shade200,
                      image: DecorationImage(
                        image: imgProvider,
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            title,
                            style: GoogleFonts.lexendDeca(
                              textStyle: Theme.of(context).textTheme.headline6,
                              color: Theme.of(context).colorScheme.onTertiary,
                            ),
                          ),
                        ),
                        IconButton(
                          icon: Icon(
                            liked ? Icons.favorite : Icons.favorite_border,
                            color: liked ? Colors.red.shade500 : Colors.grey,
                          ),
                          onPressed: onLiked,
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left: 16.0, right: 16.0),
                    child: Text(
                      description,
                      style: GoogleFonts.lexendDeca(
                        textStyle: Theme.of(context).textTheme.bodyText2,
                        color: const Color(0xFF242424),
                      ),
                    ),
                  ),
                  const SizedBox(height: 4.0),
                  Padding(
                    padding: const EdgeInsets.only(left: 16.0, right: 16.0),
                    child: Text(
                      name,
                      style: GoogleFonts.lexendDeca(
                        textStyle: Theme.of(context).textTheme.bodyText2,
                        color: const Color(0xFF242424),
                      ),
                    ),
                  ),
                  const Spacer(),
                  Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        if (isApplied) ...[
                          TextButton(
                            onPressed: onUpdate,
                            style: AppStyle.buttonSecondary,
                            child: const Text(
                              'Update',
                              style: TextStyle(fontSize: 14.0),
                            ),
                          ),
                          const SizedBox(width: 8.0),
                          TextButton(
                            onPressed: onView,
                            style: AppStyle.buttonSecondary,
                            child: const Text(
                              'View',
                              style: TextStyle(fontSize: 14.0),
                            ),
                          ),
                        ] else
                          TextButton(
                            onPressed: onApply,
                            style: AppStyle.buttonPrimary,
                            child: const Text(
                              'Apply',
                              style: TextStyle(fontSize: 14.0),
                            ),
                          ),
                        const Spacer(),
                        Padding(
                          padding:
                              const EdgeInsets.only(left: 16.0, right: 16.0),
                          child: FittedBox(
                            child: Text(
                              price,
                              maxLines: 1,
                              style: GoogleFonts.lexendDeca(
                                fontSize: 18.0,
                                color: Theme.of(context).colorScheme.primary,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
