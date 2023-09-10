export const completedQuests = [
    {
      name: 'Web3 Design',
      imageUrl:
        'https://gateway.lighthouse.storage/ipfs/QmPSdKHihUm1vtbjxk6PZXq1YJtyEDuYyQYG92SsiU5WY6',
      url: '#',
    },
    {
      name: 'UI / UX',
      imageUrl:
        'https://gateway.lighthouse.storage/ipfs/QmdCqukPbYRZrkzf6Y1xHHeMj9cUseFUTYb7x4qmezAJgP',
      url: '#',
    },
    {
      name: 'NFT Collections',
      imageUrl:
        'https://gateway.lighthouse.storage/ipfs/Qme27jjA2U9ASDBbBxAUuLPByvDjp5v9Ua3y7erErwfimZ',
      url: '#',
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type CompletedQuest = ElementType<typeof completedQuests>