import 'dart:async';

import 'package:cred_lancer/injectable.dart';
import 'package:cred_lancer/repositories/data_repository.dart';
import 'package:cred_lancer/state/quests/quests_cubit.dart';
import 'package:cred_lancer/ui/pages/quest_proposal_page.dart';
import 'package:cred_lancer/ui/widgets/custom_sliver_app_bar.dart';
import 'package:cred_lancer/ui/widgets/quest_card.dart';
import 'package:cred_lancer/ui/widgets/search_field.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class QuestsPage extends StatefulWidget {
  const QuestsPage({super.key});

  @override
  State<QuestsPage> createState() => _QuestsPageState();
}

class _QuestsPageState extends State<QuestsPage> {
  final _unfocusNode = FocusNode();
  late final TextEditingController _searchController;
  Timer? _debounce;

  @override
  void initState() {
    super.initState();
    _searchController = TextEditingController();
    _searchController.addListener(() {
      setState(() {});
      // _debounce?.cancel();
      // _debounce = Timer(const Duration(milliseconds: 500), () {
      //   setState(() {});
      // });
    });
  }

  @override
  void dispose() {
    _unfocusNode.dispose();
    _searchController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<QuestsCubit, QuestsState>(
      bloc: getIt<QuestsCubit>(),
      builder: (context, state) {
        final allQuests =
            state.quests.fold((() => []), (v) => v.fold((l) => [], (r) => r));
        final quests = _searchController.text.isNotEmpty
            ? allQuests
                .where((element) => element.title
                    .toLowerCase()
                    .contains(_searchController.text.toLowerCase()))
                .toList()
            : allQuests;

        return GestureDetector(
          onTap: () => FocusScope.of(context).requestFocus(_unfocusNode),
          child: Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            body: NestedScrollView(
              headerSliverBuilder: (context, _) => [
                CustomSliverAppbar(
                  title: 'Quests',
                  bottom: SearchField(
                    controller: _searchController,
                    label: 'What are you looking for?',
                    enableClearButton: _searchController.text.isNotEmpty,
                  ),
                ),
              ],
              body: SafeArea(
                child: ListView.separated(
                  itemCount: quests.length,
                  padding: const EdgeInsets.all(16.0),
                  separatorBuilder: (context, index) =>
                      const SizedBox(height: 16.0),
                  itemBuilder: (_, index) {
                    return QuestCard(
                      name: DataRepository.org[0].name,
                      description: quests[index].description,
                      title: quests[index].title,
                      image: quests[index].image,
                      price: '\$${quests[index].value}',
                      liked: false,
                      isApplied: quests[index].status == 'applied',
                      onApply: () {
                        Navigator.push(
                            context,
                            CupertinoPageRoute(
                                builder: (_) => QuestProposalPage(
                                      quest: quests[index],
                                    )));
                      },
                      onUpdate: () {},
                      onView: () {},
                      onLiked: () {},
                    );
                  },
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}
