import 'package:cred_lancer/ui/listeners/sign_up_listener.dart';
import 'package:cred_lancer/ui/pages/lancer_sign_up_page.dart';
import 'package:cred_lancer/ui/pages/org_sign_up_page.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class UserTypePage extends StatefulWidget {
  const UserTypePage({super.key});

  @override
  State<UserTypePage> createState() => _UserTypePageState();
}

class _UserTypePageState extends State<UserTypePage> {
  late bool isOrganization;

  @override
  void initState() {
    isOrganization = false;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SignUpListener(
      child: Scaffold(
        backgroundColor: Theme.of(context).colorScheme.background,
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          automaticallyImplyLeading: false,
          elevation: .0,
        ),
        body: SafeArea(
          child: Column(
            children: [
              Expanded(
                child: Column(
                  children: [
                    Expanded(
                      child: SizedBox(
                        width: 280.0,
                        child: Image.asset(
                          'assets/images/globe-1.png',
                          fit: BoxFit.contain,
                        ),
                      ),
                    ),
                    const SizedBox(height: 24.0),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 32.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          Text(
                            'Who are you?',
                            textAlign: TextAlign.center,
                            maxLines: 1,
                            style: GoogleFonts.poppins(
                              fontSize: 32.0,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                          const SizedBox(height: 24.0),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceAround,
                            children: [
                              UserTypeItem(
                                onTap: () {
                                  setState(() {
                                    isOrganization = true;
                                  });
                                },
                                label: 'Organization',
                                image: 'assets/images/person-2.png',
                                isActive: isOrganization,
                              ),
                              UserTypeItem(
                                onTap: () {
                                  setState(() {
                                    isOrganization = false;
                                  });
                                },
                                label: 'Individual',
                                image: 'assets/images/person-1.png',
                                isActive: !isOrganization,
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24.0),
                  ],
                ),
              ),
              SizedBox(
                height: 150,
                width: double.infinity,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 70),
                      width: 260.0,
                      height: 72.0,
                      decoration: BoxDecoration(
                        color: Theme.of(context).colorScheme.tertiaryContainer,
                        shape: BoxShape.rectangle,
                        borderRadius: BorderRadius.circular(40.0),
                      ),
                      child: TextButton(
                        onPressed: () {
                          Navigator.push(
                              context,
                              CupertinoPageRoute(
                                builder: (_) => isOrganization
                                    ? const OrgSignUpPage()
                                    : const LancerSignUpPage(),
                              ));
                        },
                        style: TextButton.styleFrom(
                          backgroundColor: Colors.transparent,
                          foregroundColor:
                              Theme.of(context).colorScheme.onTertiaryContainer,
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Expanded(
                              child: Text(
                                'Continue',
                                textAlign: TextAlign.center,
                                maxLines: 1,
                                overflow: TextOverflow.fade,
                                style: GoogleFonts.lexendDeca(
                                  fontSize: 19.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                          ],
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
    );
  }
}

class UserTypeItem extends StatelessWidget {
  const UserTypeItem({
    super.key,
    required this.label,
    required this.image,
    required this.isActive,
    required this.onTap,
  });

  final String label;
  final String image;
  final bool isActive;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextButton(
          onPressed: onTap,
          style: TextButton.styleFrom(
            backgroundColor: Colors.transparent,
            shape: CircleBorder(
              side: isActive
                  ? BorderSide(
                      color: Theme.of(context).colorScheme.primary,
                      width: 3.5,
                    )
                  : BorderSide.none,
            ),
          ),
          child: CircleAvatar(
            radius: 50.0,
            backgroundColor: Theme.of(context).colorScheme.secondary,
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Image.asset(
                image,
                fit: BoxFit.cover,
              ),
            ),
          ),
        ),
        const SizedBox(height: 8.0),
        Text(
          label,
          textAlign: TextAlign.center,
          maxLines: 1,
          style: GoogleFonts.poppins(
            fontSize: 16.0,
            fontWeight: FontWeight.normal,
          ),
        ),
      ],
    );
  }
}
