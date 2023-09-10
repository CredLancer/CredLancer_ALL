import 'package:cred_lancer/models/proposal.dart';
import 'package:cred_lancer/models/quest.dart';
import 'package:hive_flutter/hive_flutter.dart';

class DataRepository {
  static const quests = [
    QuestResponse(
      title: 'Web3 Design',
      description: 'Design a web3 app',
      image:
          'https://gateway.lighthouse.storage/ipfs/QmPSdKHihUm1vtbjxk6PZXq1YJtyEDuYyQYG92SsiU5WY6',
      id: 1,
      questCID: '0x0',
      status: '',
      orgId: 1,
      value: 100,
    ),
    QuestResponse(
      title: 'UI/UX Design',
      description: 'Design a UI/UX app',
      image:
          'https://gateway.lighthouse.storage/ipfs/QmdCqukPbYRZrkzf6Y1xHHeMj9cUseFUTYb7x4qmezAJgP',
      id: 2,
      questCID: '0x0',
      status: '',
      orgId: 1,
      value: 200,
    ),
    QuestResponse(
      title: 'Mobile App Dev',
      description: 'Develop a mobile app',
      image:
          'https://gateway.lighthouse.storage/ipfs/Qme27jjA2U9ASDBbBxAUuLPByvDjp5v9Ua3y7erErwfimZ',
      id: 3,
      questCID: '0x0',
      status: 'applied',
      orgId: 1,
      value: 500,
    ),
    QuestResponse(
      title: 'React Dev',
      description: 'Develop a react app',
      image:
          'https://gateway.lighthouse.storage/ipfs/QmPSdKHihUm1vtbjxk6PZXq1YJtyEDuYyQYG92SsiU5WY6',
      id: 4,
      questCID: '0x0',
      status: 'applied',
      orgId: 1,
      value: 200,
    ),
    QuestResponse(
      title: 'NFT Colletions',
      description: 'Curate a NFT collection',
      image:
          'https://gateway.lighthouse.storage/ipfs/Qme27jjA2U9ASDBbBxAUuLPByvDjp5v9Ua3y7erErwfimZ',
      id: 5,
      questCID: '0x0',
      status: '',
      orgId: 1,
      value: 300,
    ),
  ];

  static const org = [
    OrganizationModel(
      id: 1,
      admin: '0x06465E746897269c1ec9b00bBed44dC435542CE3',
      name: 'Terra',
      imageCID: '0x0',
      imageURL: '',
      description:
          'Org Something Description Test Org Something Description Test Org Something Description Test',
      video: '',
      blockNumber: 0,
      email: 'org@email.com',
    ),
  ];

  Future<void> createData() async {}
}
