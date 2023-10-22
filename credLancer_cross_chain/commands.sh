# forge script ./script/Faucet.s.sol -vvv --broadcast --rpc-url ethereumSepolia --sig "run(uint8)" -- 0
# forge script ./script/deployer.sol -vvv --rpc-url optimismGoerli --sig "deploySender(uint8,uint8)" -- 1 4
# forge script ./script/deployer.sol -vvv --rpc-url avalancheFuji --sig "deploySender(uint8,uint8)" -- 2 4
# forge script ./script/deployer.sol -vvv --rpc-url polygonMumbai --sig "deployReceiver(uint8,uint8)" -- 4 2
# forge script ./script/deployer.sol -vvv --rpc-url polygonMumbai --sig "creatOrg(address)" -- 0x39B4a8C71E0550dfE2b0542F09560A436D8C55F0
# forge script ./script/deployer.sol -vvv --rpc-url avalancheFuji --sig "createQuest(uint256,address,address)" -- 0 0x39B4a8C71E0550dfE2b0542F09560A436D8C55F0 0x047d2B7232fdE3C678Fb251F4C7712022e8af727 


