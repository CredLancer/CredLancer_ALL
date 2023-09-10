import 'package:cached_network_image/cached_network_image.dart';
import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/state/sign_up/sign_up_cubit.dart';
import 'package:cred_lancer/ui/pages/create_quest_page.dart';
import 'package:cred_lancer/utils/theme.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class DashboardView extends StatelessWidget {
  const DashboardView({
    super.key,
    required this.name,
    required this.image,
    required this.description,
    required this.acIdentifier,
    required this.isOrganization,
    required this.linkedAccounts,
  });

  final String name;
  final String image;
  final String description;
  final String acIdentifier;
  final bool isOrganization;
  final List<LinkedAccount> linkedAccounts;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: .0,
      ),
      extendBodyBehindAppBar: true,
      extendBody: true,
      body: ListView(
        padding: EdgeInsets.zero,
        children: [
          Stack(
            children: [
              SizedBox(
                height: 250.0,
                child: Column(
                  children: [
                    SizedBox(
                      height: 200.0,
                      child: Image.asset(
                        'assets/images/cover.png',
                        fit: BoxFit.cover,
                      ),
                    ),
                    Align(
                      alignment: Alignment.centerRight,
                      child: Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: IconButton(
                          onPressed: () {
                            getIt<SignUpCubit>().logout();
                          },
                          icon: const Icon(EvaIcons.logOutOutline),
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Positioned(
                left: 16.0,
                top: 150.0,
                child: CircleAvatar(
                  radius: 50.0,
                  backgroundColor: Colors.grey.shade300,
                  foregroundImage: CachedNetworkImageProvider(
                    image,
                  ),
                  child: const Icon(
                    EvaIcons.personOutline,
                    size: 50.0,
                  ),
                ),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, 16.0, 24.0, 8.0),
            child: Row(
              children: [
                Flexible(
                  child: Text(
                    name,
                    style: GoogleFonts.lexendDeca(
                      textStyle: Theme.of(context).textTheme.headline5,
                      color: Theme.of(context).colorScheme.onBackground,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                if (isOrganization)
                  Container(
                    margin: const EdgeInsets.only(left: 16.0),
                    padding: const EdgeInsets.symmetric(
                        horizontal: 12.0, vertical: 4.0),
                    decoration: BoxDecoration(
                      border: Border.all(
                        color: Theme.of(context).colorScheme.onBackground,
                        width: 1.5,
                      ),
                      borderRadius: BorderRadius.circular(36.0),
                    ),
                    child: Text(
                      'ORG',
                      style: GoogleFonts.lexendDeca(
                        fontSize: 10.0,
                        color: Theme.of(context).colorScheme.onBackground,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, 8.0, 24.0, 8.0),
            child: Row(
              children: [
                TextButton(
                  onPressed: () {},
                  style: AppStyle.buttonPrimary,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4.0),
                    child: Row(
                      children: [
                        Text(acIdentifier),
                        const SizedBox(width: 4.0),
                        const Icon(
                          EvaIcons.copyOutline,
                          size: 20.0,
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(width: 8.0),
                TextButton(
                  onPressed: () {},
                  style: AppStyle.buttonPrimary,
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 4.0),
                    child: Text('Edit Profile'),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, 8.0, 24.0, 8.0),
            child: Text(
              description,
              maxLines: 3,
              style: GoogleFonts.lexendDeca(
                fontSize: 14.0,
                color: Colors.grey.shade300,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, 16.0, 24.0, 16.0),
            child: Text(
              '${linkedAccounts.length} Linked Accounts',
              style: GoogleFonts.poppins(
                fontSize: 15.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, .0, 24.0, 16.0),
            child: Wrap(
              children: [
                ...List.generate(
                  linkedAccounts.length,
                  (index) => Padding(
                    padding: const EdgeInsets.only(right: 8.0),
                    child: TextButton(
                      onPressed: () {},
                      style: TextButton.styleFrom(
                        backgroundColor: Colors.grey.shade300,
                        foregroundColor:
                            Theme.of(context).colorScheme.onTertiary,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(40.0),
                        ),
                      ),
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 4.0),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            SizedBox(
                              height: 20.0,
                              width: 20.0,
                              child: CachedNetworkImage(
                                imageUrl: linkedAccounts[index].image,
                              ),
                            ),
                            const SizedBox(width: 8.0),
                            Text(
                              linkedAccounts[index].name,
                              style: GoogleFonts.lexendDeca(
                                fontSize: 14.0,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, 16.0, 24.0, 16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Credentials',
                  maxLines: 1,
                  style: GoogleFonts.poppins(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const SizedBox(height: 4.0),
                Text(
                  'Below are the credentials issued to this profile, shared publicly.',
                  maxLines: 2,
                  style: GoogleFonts.lexendDeca(
                    fontSize: 14.0,
                    color: Colors.grey.shade300,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 48.0),
          Padding(
            padding: const EdgeInsets.fromLTRB(24.0, 16.0, 24.0, 16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (isOrganization)
                  SizedBox(
                    width: 300.0,
                    child: TextButton(
                      onPressed: () {
                        Navigator.push(
                            context,
                            CupertinoPageRoute(
                                builder: (_) => const CreateQuestPage()));
                      },
                      style: AppStyle.buttonSecondary,
                      child: Padding(
                        padding: const EdgeInsets.all(12.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Image.asset(
                              'assets/icons/create-dashboard.png',
                              height: 32.0,
                              width: 32.0,
                            ),
                            Center(
                              child: Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 8.0),
                                child: Text(
                                  'CREATE\nQUEST',
                                  textAlign: TextAlign.center,
                                  maxLines: 2,
                                  style: GoogleFonts.lexendDeca(
                                    fontSize: 22.0,
                                    color: Theme.of(context)
                                        .colorScheme
                                        .onSecondary,
                                  ),
                                ),
                              ),
                            ),
                            const Center(
                              child: Icon(
                                EvaIcons.arrowForwardOutline,
                                size: 32.0,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  )
                else
                  SizedBox(
                    width: 300.0,
                    child: TextButton(
                      onPressed: () {},
                      style: AppStyle.buttonSecondary,
                      child: Padding(
                        padding: const EdgeInsets.all(12.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Image.asset(
                              'assets/icons/box-outline.png',
                              height: 32.0,
                              width: 32.0,
                            ),
                            Center(
                              child: Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 8.0),
                                child: Text(
                                  'VIEW\nQUEST',
                                  textAlign: TextAlign.center,
                                  maxLines: 2,
                                  style: GoogleFonts.lexendDeca(
                                    fontSize: 22.0,
                                    color: Theme.of(context)
                                        .colorScheme
                                        .onSecondary,
                                  ),
                                ),
                              ),
                            ),
                            const Center(
                              child: Icon(
                                EvaIcons.arrowForwardOutline,
                                size: 32.0,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class LinkedAccount {
  final String image;
  final String name;
  final String url;

  LinkedAccount({required this.image, required this.name, required this.url});
}
