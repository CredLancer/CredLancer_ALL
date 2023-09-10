import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class OnboardingView extends StatefulWidget {
  const OnboardingView({
    super.key,
    required this.connectLoading,
    required this.onConnectWallet,
  });

  final bool connectLoading;
  final VoidCallback onConnectWallet;

  @override
  State<OnboardingView> createState() => _OnboardingViewState();
}

class _OnboardingViewState extends State<OnboardingView> {
  final int _numPages = 2;
  late final PageController _pageController;
  late int _currentPage;

  @override
  void initState() {
    _pageController = PageController(initialPage: 0);
    _currentPage = _pageController.initialPage;
    super.initState();
  }

  List<Widget> _buildPageIndicator() {
    List<Widget> list = [];
    for (int i = 0; i < _numPages; i++) {
      list.add(i == _currentPage ? _indicator(true) : _indicator(false));
    }
    return list;
  }

  Widget _indicator(bool isActive) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 4.0),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        height: 10.0,
        width: isActive ? 48.0 : 20.0,
        decoration: BoxDecoration(
          color: isActive ? Colors.white : Colors.grey.shade400,
          borderRadius: BorderRadius.circular(12.0),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final enableLogin = _currentPage == _numPages - 1;

    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        automaticallyImplyLeading: false,
        elevation: .0,
        title: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: _buildPageIndicator(),
          ),
        ),
        centerTitle: true,
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: PageView(
                physics: const ClampingScrollPhysics(),
                controller: _pageController,
                onPageChanged: (int page) {
                  setState(() {
                    _currentPage = page;
                  });
                },
                children: <Widget>[
                  Column(
                    children: [
                      Expanded(
                        child: SizedBox(
                          width: 320.0,
                          child: Image.asset(
                            'assets/images/globe.png',
                            fit: BoxFit.contain,
                          ),
                        ),
                      ),
                      const SizedBox(height: 24.0),
                      SizedBox(
                        height: 150.0,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 32.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Text(
                                'CredLancer',
                                textAlign: TextAlign.center,
                                maxLines: 1,
                                style: GoogleFonts.poppins(
                                  fontSize: 32.0,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              const SizedBox(height: 16.0),
                              Text(
                                'Secure, verifiable platform for credentials and collaboration',
                                textAlign: TextAlign.center,
                                maxLines: 3,
                                style: GoogleFonts.lexendDeca(
                                  fontSize: 17.0,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                  Column(
                    children: [
                      Expanded(
                        child: SizedBox(
                          width: 380.0,
                          child: Image.asset(
                            'assets/images/user.png',
                            fit: BoxFit.contain,
                          ),
                        ),
                      ),
                      const SizedBox(height: 24.0),
                      SizedBox(
                        height: 150.0,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 32.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: [
                              Text(
                                'Let\'s create',
                                textAlign: TextAlign.center,
                                maxLines: 1,
                                style: GoogleFonts.poppins(
                                  fontSize: 32.0,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              const SizedBox(height: 16.0),
                              Text(
                                'Welcome to CredLancer',
                                textAlign: TextAlign.center,
                                maxLines: 3,
                                style: GoogleFonts.lexendDeca(
                                  fontSize: 17.0,
                                  fontWeight: FontWeight.normal,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
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
                    width: enableLogin ? 260.0 : 72.0,
                    height: 72.0,
                    decoration: BoxDecoration(
                      color: Theme.of(context).colorScheme.tertiaryContainer,
                      shape: BoxShape.rectangle,
                      borderRadius: BorderRadius.circular(40.0),
                    ),
                    child: enableLogin
                        ? TextButton(
                            onPressed: widget.onConnectWallet,
                            style: TextButton.styleFrom(
                              backgroundColor: Colors.transparent,
                              foregroundColor: Theme.of(context)
                                  .colorScheme
                                  .onTertiaryContainer,
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Expanded(
                                  child: Text(
                                    'Connect Wallet',
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
                          )
                        : TextButton(
                            onPressed: () {
                              _pageController.nextPage(
                                duration: const Duration(milliseconds: 200),
                                curve: Curves.ease,
                              );
                            },
                            style: TextButton.styleFrom(
                              backgroundColor: Colors.transparent,
                              foregroundColor: Theme.of(context)
                                  .colorScheme
                                  .onTertiaryContainer,
                            ),
                            child: SizedBox(
                              height: 26.0,
                              width: 26.0,
                              child:
                                  Image.asset('assets/icons/arrow-right.png'),
                            ),
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
