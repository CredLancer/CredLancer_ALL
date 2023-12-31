// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "forge-std/Script.sol";
import "./SigUtils.sol";
import "./Helper.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";
 import {OrganizationController} from "../src/OrganizationController.sol";
 import {ICredential} from "../src/identity/ICredential.sol";
 import {Credential} from "../src/Credential.sol";
 import {QuestController} from "../src/QuestController.sol";
 import {QuestControllerSender} from "../src/cross-chain/QuestControllerSender.sol";

contract Deployer is Script, Helper ,SigUtils{


   function deploySender(
           SupportedNetworks destination,
          SupportedNetworks source
      
     )external returns ( QuestControllerSender sender)  {

        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);
           ( address sourceRouter, address linkToken, address weth_, ) = getConfigFromNetwork(
            source
        );
        (, , , uint64 destinationChainId) = getConfigFromNetwork(destination);
         sender = new  QuestControllerSender(sourceRouter, linkToken,payable(weth_),destinationChainId);
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
         (address sourceRouter, , , ) = getConfigFromNetwork(
            source
           );
        (, ,address weth_ , ) = getConfigFromNetwork(destination);

        receiver = new QuestController(orgController, ICredential(address(credential)),sourceRouter,payable(weth_));
        console.log( " your contract is deployed at address: ",address(receiver)  );
 
        vm.stopBroadcast();

        
    }


 function createQuest(
            SupportedNetworks source,
           uint256 nonce,
           address receiver,
           address sender
      
     )external  {

       
        vm.startBroadcast( vm.envUint("PRIVATE_KEY"));
        {

         ( , address linkToken, , ) = getConfigFromNetwork(
            source
        );
            IERC20(linkToken).transfer(sender,1 ether);
        }
       { uint256 deadline = block.timestamp + 300 days;
        // convert questCID to bytes
        bytes memory questCID = abi.encodePacked('0x0170122039febd81cc2eddc5bd20afeb13d86e6e511b40468296f10562e4b6c3fe74656b');
        uint256 reward = 1000000000;
        uint256 orgId=1;

         bytes memory  signature;
        { 
            // bock scope to avoid stack too deep error
             bytes32 digest = _getCreateRequstStructHash(questCID,reward,orgId,deadline,nonce);

            (uint8 v, bytes32 r, bytes32 s) = vm.sign( vm.envUint("PRIVATE_KEY"), digest);

           signature  = abi.encodePacked(r, s, v);}
   
            

    
        //    QuestControllerSender(payable(sender))
        //    .createQuest { value: 100000 }(questCID,reward,orgId,deadline,signature,nonce,receiver,true);     
          
    }
        // console.log(
        //     "You can now monitor the status of your Chainlink CCIP Message via https://ccip.chain.link using CCIP Message ID: "
        // );
        // console.logBytes32(messageId);

        vm.stopBroadcast();
    }


function creatOrg(
                      address org
      
     )external  {

       
        vm.startBroadcast( vm.envUint("PRIVATE_KEY"));
     
       {
        string memory name = "Org 1";
        bytes memory imageCID = abi.encode("0x01701220c3c4733ec8affd06cf9e9ff50ffc6bcd2ec85a6170004bb709669c31de94391a");
        uint256 nonce =0;
         bytes memory  signature;
        { 
            // bock scope to avoid stack too deep error
            bytes32 digest = _getCreateOrgStructHash(name, imageCID, nonce);
            (uint8 v, bytes32 r, bytes32 s) = vm.sign( vm.envUint("PRIVATE_KEY"), digest);

           signature  = abi.encodePacked(r, s, v);}
   
            

    
           OrganizationController(org)
           .createOrganization(
        name, imageCID,signature, nonce);
        // console.log(
        //     "You can now monitor the status of your Chainlink CCIP Message via https://ccip.chain.link using CCIP Message ID: "
        // );
        // console.logBytes32(messageId);

        vm.stopBroadcast();
    }
}
    
}