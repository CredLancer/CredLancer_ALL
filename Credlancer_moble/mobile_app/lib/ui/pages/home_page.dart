import 'package:cred_lancer/ui/listeners/sign_up_listener.dart';
import 'package:cred_lancer/ui/pages/lancer_dashboard_page.dart';
import 'package:cred_lancer/ui/pages/liked_page.dart';
import 'package:cred_lancer/ui/pages/org_dashboard_page.dart';
import 'package:cred_lancer/ui/pages/quests_page.dart';
import 'package:cred_lancer/ui/pages/settings_page.dart';
import 'package:eva_icons_flutter/eva_icons_flutter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:persistent_bottom_nav_bar/persistent_tab_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.isOrganization});

  final bool isOrganization;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late PersistentTabController _controller;

  @override
  void initState() {
    _controller = PersistentTabController(initialIndex: 0);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SignUpListener(
      child: PersistentTabView(
        context,
        controller: _controller,
        screens: [
          widget.isOrganization
              ? const OrgDashboardPage()
              : const LancerDashboardPage(),
          const QuestsPage(),
          const LikedPage(),
          const SettingsPage(),
        ],
        navBarHeight: 72.0,
        items: _navBarsItems(),
        hideNavigationBar: false,
        confineInSafeArea: true,
        backgroundColor: Theme.of(context).colorScheme.background,
        handleAndroidBackButtonPress: true,
        resizeToAvoidBottomInset: false,
        stateManagement: true,
        hideNavigationBarWhenKeyboardShows: true,
        decoration: NavBarDecoration(
          borderRadius: const BorderRadius.only(
            topLeft: Radius.circular(16.0),
            topRight: Radius.circular(16.0),
          ),
          // border: Border(
          //   top: BorderSide(
          //     color: Theme.of(context).colorScheme.onTertiary,
          //     width: 1.5,
          //   ),
          // ),
          colorBehindNavBar: Theme.of(context).colorScheme.background,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.2),
              spreadRadius: 1,
              blurRadius: 10,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        popAllScreensOnTapOfSelectedTab: true,
        popActionScreens: PopActionScreensType.all,
        itemAnimationProperties: const ItemAnimationProperties(
          duration: Duration(milliseconds: 200),
          curve: Curves.ease,
        ),
        screenTransitionAnimation: const ScreenTransitionAnimation(
          animateTabTransition: true,
          curve: Curves.ease,
          duration: Duration(milliseconds: 200),
        ),
        navBarStyle: NavBarStyle.style12,
      ),
    );
  }

  List<PersistentBottomNavBarItem> _navBarsItems() {
    final colorScheme = Theme.of(context).colorScheme;

    return [
      PersistentBottomNavBarItem(
        icon: const Icon(EvaIcons.home),
        inactiveIcon: const Icon(EvaIcons.homeOutline),
        title: "Home",
        activeColorPrimary: colorScheme.primary,
        inactiveColorPrimary: colorScheme.onBackground,
      ),
      PersistentBottomNavBarItem(
        icon: const Icon(EvaIcons.grid),
        inactiveIcon: const Icon(EvaIcons.gridOutline),
        title: "Quests",
        activeColorPrimary: colorScheme.primary,
        inactiveColorPrimary: colorScheme.onBackground,
      ),
      PersistentBottomNavBarItem(
        icon: const Icon(EvaIcons.heart),
        inactiveIcon: const Icon(EvaIcons.heartOutline),
        title: "Liked",
        activeColorPrimary: colorScheme.primary,
        inactiveColorPrimary: colorScheme.onBackground,
      ),
      PersistentBottomNavBarItem(
        icon: const Icon(EvaIcons.settings),
        inactiveIcon: const Icon(EvaIcons.settingsOutline),
        title: "Settings",
        activeColorPrimary: colorScheme.primary,
        inactiveColorPrimary: colorScheme.onBackground,
      ),
    ];
  }
}
