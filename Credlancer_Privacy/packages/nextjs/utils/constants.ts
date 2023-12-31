import { getAddress } from "@ethersproject/address";

export const ethAddress = getAddress(`0x${"e".repeat(40)}`);
export const ipfsDomain = "https://gateway.ipfs.io/ipfs/";
export const VALID_AMOUNT_REGEX = /^[\d\\.]+$/;

export const CUSTOM_TOKENS_STORAGE_KEY = "customTokens";
export const TOKEN_PRIORITY_SORT = ["USDC", "DAI", "USDT"];

// This list was pulled from https://github.com/Railgun-Privacy/frontend-react-private/blob/main/src/services/token/exports/rebase_token_address_list.json
export const rebaseTokens = [
  "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
  "0xc0d4ceb216b3ba9c3701b291766fdcba977cec3a",
  "0xb54f16fb19478766a268f172c9480f8da1a7c9c3",
  "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
  "0x027dbca046ca156de9622cd1e2d907d375e53aa7",
  "0xdb021b1b247fe2f1fa57e0a87c748cc1e321f07f",
  "0xf2f5bf00cd952f3f980a02f5dce278cbff4dae05",
  "0x4e78011ce80ee02d2c3e649fb657e45898257815",
  "0x470ebf5f030ed85fc1ed4c2d36b9dd02e77cf1b7",
  "0x7d1232b90d3f809a54eeaeebc639c62df8a8942f",
  "0x4a436073552044d5f2f49b176853ad3ad473d9d6",
  "0xfa1fbb8ef55a4855e5688c0ee13ac3f202486286",
  "0x5602df4a94eb6c680190accfa2a475621e0ddbdc",
  "0x2f6081e3552b1c86ce4479b80062a1dda8ef23e3",
  "0x798d1be841a82a273720ce31c822c61a67a601c3",
  "0x0dc78c79b4eb080ead5c1d16559225a46b580694",
  "0x1b239abe619e74232c827fbe5e49a4c072bd869d",
  "0x19e6bfc1a6e4b042fb20531244d47e252445df01",
  "0xd754ae7bb55feb0c4ba6bc037b4a140f14ebe018",
  "0xd86e3f7b2ff4e803f90c799d702955003bca9875",
  "0xc250e9987a032acac293d838726c511e6e1c029d",
  "0xf6d46849db378ae01d93732585bec2c4480d1fd5",
  "0x3b57f3feaaf1e8254ec680275ee6e7727c7413c7",
  "0x07150e919b4de5fd6a63de1f9384828396f25fdc",
  "0x08eecf5d03bda3df2467f6af46b160c24d931de7",
  "0x057e0bd9b797f9eeeb8307b35dbc8c12e534c41e",
  "0x21ad647b8f4fe333212e735bfc1f36b4941e6ad2",
  "0x67c597624b17b16fb77959217360b7cd18284253",
  "0xe52c7144fed0aeca882dd93bc76c9135f5598ddd",
  "0x8ac9dc3358a2db19fdd57f433ff45d1fc357afb3",
  "0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d",
  "0x8a14897ea5f668f36671678593fae44ae23b39fb",
  "0x1c7bbadc81e18f7177a95eb1593e5f5f35861b10",
  "0x0a2046c7faa5a5f2b38c0599deb4310ab781cc83",
  "0x9248c485b0b80f76da451f167a8db30f33c70907",
  "0x68a118ef45063051eac49c7e647ce5ace48a68a5",
  "0x233d91a0713155003fc4dce0afa871b508b3b715",
  "0xe49bfc53a195a62d78a941a1967d7b0f83a47c14",
  "0x4e141769366634d9c4e498257fa7ec204d22b634",
  "0x353af195c0d82820c59427bfbd318a49971aae1a",
  "0xb82e7a40fba04cfe053ff2db6ebf4f2fb39f4c6a",
  "0xbdaa094a95e452c6ba175ce9edfefba04e6a51ac",
  "0x29f1e986fca02b7e54138c04c4f503dddd250558",
  "0xc6f26e6df5f44c0ccd939581987c09b866cdbd1a",
  "0x70b33ebc5544c12691d055b49762d0f8365d99fe",
  "0x383518188c0c6d7730d91b2c03a03c837814a899",
  "0x63290fc683d11ea077aba09596ff7387d49df912",
  "0x1337ace33c2b3fc17d85f33dbd0ed73a896148b5",
  "0x04906695d6d12cf5459975d7c3c03356e4ccd460",
  "0xdb96f8efd6865644993505318cc08ff9c42fb9ac",
  "0x9505dbd77dacd1f6c89f101b98522d4b871d88c5",
  "0xde9e52f1838951e4d2bb6c59723b003c353979b6",
  "0xcda2fdeee5c382e401c04dc929e53ababf6c8109",
  "0x8fba8c1f92210f24fb277b588541ac1952e1aac8",
  "0x39912d83acb4a373321387300f4fbe88aa5d6f14",
];

export const UNSTOPPABLE_DOMAIN_SUFFIXES = [
  ".crypto",
  ".nft",
  ".blockchain",
  ".bitcoin",
  ".coin",
  ".wallet",
  ".888",
  ".dao",
  ".x",
  ".zil",
];

export const SUBGRAPH_URI = "https://api.thegraph.com/subgraphs/name/talentlayer/talent-layer-mumbai";
