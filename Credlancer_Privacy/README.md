# CredLancer - ETHRome 2023

⚙️ Built on top of Scaffold ETH 2, along with the following protocols

- **Request Network**: To create encrypted invoices
- **Railgun Protocol**: To faciliate private payment and receipt of tokens
- **TalentLayer Protocol**: Build on top of existing social ID and manage job requests and proposals
- **The Graph**: Subgraph for custom TalentLayer contracts
- **Semaphore Protocol**: To allow private review systems


## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started, follow the steps below:

1. Clone this repo & install dependencies

```
yarn install
```

2. Run a local network in the first terminal:

```
cd packages/hardhat && yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a third terminal, start your NextJS app:

```
cd packages/nextjs && yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component or the example ui in the frontend. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`
