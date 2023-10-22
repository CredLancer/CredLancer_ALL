// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "forge-std/Script.sol";
import "./Helper.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";
 import {OrganizationController} from "../src/OrganizationController.sol";
 import {Credential} from "../src/Credential.sol";
 import {QuestController} from "../src/QuestController.sol";
 import {QuestControllerSender} from "../src/cross-chain/QuestControllerSender.sol";

contract Deployer is Script, Helper {


   function deploySender(
           SupportedNetworks destination,
          SupportedNetworks source
      
     )external returns ( QuestControllerSender sender)  {

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
           ( address sourceRouter, address linkToken, address weth_, ) = getConfigFromNetwork(
            source
        );
        //  IERC20(linkToken).transfer(sender,fees);
        (, , , uint64 destinationChainId) = getConfigFromNetwork(destination);
                /**    address router_, address link ,address payable weth_, uint64 destinationChainSelector_ */

    sender = new  QuestControllerSender(sourceRouter, linkToken,payable(weth_),destinationChainId);
     IERC20(linkToken).approve(address(sender), 1 ether);

 
    //  send some link token to the contract to be used to pay fees
      IERC20(linkToken).transfer(address(sender),30 ether);

        console.log(
            " your contract is deployed at address: ",address(sender)  );
        

        vm.stopBroadcast();
         
    }
// QuestControllerContract deployment script 
   function deployReceiver(
       SupportedNetworks destination,
       SupportedNetworks source
     
    ) external returns ( QuestController receiver) {



        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
         vm.startBroadcast(senderPrivateKey);
         OrganizationController orgController = new OrganizationController();
         Credential credential = new Credential();
         (address sourceRouter, address linkToken, , ) = getConfigFromNetwork(
            source
           );
        (address desinationRouter, ,address weth_ , ) = getConfigFromNetwork(destination);

        receiver = new QuestController(orgController, credential,sourceRouter,payable(weth_));
        console.log( " your contract is deployed at address: ",address(receiver)  );
 
        vm.stopBroadcast();

        
    }
}
    
