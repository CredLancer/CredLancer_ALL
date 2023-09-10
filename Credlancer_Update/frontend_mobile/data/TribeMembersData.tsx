export const tribeMembers = [
    {
      name: 'GAME 7',
      imageUrl:
        'https://gateway.lighthouse.storage/ipfs/QmTg1hXZVvjWDHw37UJxdRkAMmprQzYqq7rhE1bYopcNyr',
      url: '#',
    },
    {
      name: 'SOZUHAUS',
      imageUrl:
        'https://gateway.lighthouse.storage/ipfs/QmTg1hXZVvjWDHw37UJxdRkAMmprQzYqq7rhE1bYopcNyr',
      url: '#',
    },
    {
      name: 'JOAN DOE',
      imageUrl:
        'https://gateway.lighthouse.storage/ipfs/QmTg1hXZVvjWDHw37UJxdRkAMmprQzYqq7rhE1bYopcNyr',
      url: '#',
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type TribeMember = ElementType<typeof tribeMembers>