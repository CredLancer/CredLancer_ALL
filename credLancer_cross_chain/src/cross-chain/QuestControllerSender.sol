// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/security/Pausable.sol";
import "../shared/WETH9.sol";
import "./CrossChainSender.sol";
 
contract QuestControllerSender is  Pausable, CrossChainSender{
WETH9 public immutable weth;
    constructor(
       address router_, address link ,address payable weth_, uint64 destinationChainSelector_
    )CrossChainSender (router_,link,destinationChainSelector_) {
         
        weth = WETH9(weth_);
    }

 
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }



    function createQuest(
     
        bytes calldata questCID,
        uint256 reward,
        uint256 orgId,
        uint256 deadline,
        bytes calldata signature,
        uint256 nonce,
        address receiver,
        PayFeesIn payFeesIn
    ) public payable  {
//_createQuest(questCID, reward, orgId, deadline, signature, nonce,msg.sender,msg.value);
            uint256 amount= msg.value;
            weth.deposit{value:amount}();
            weth.approve(i_router, amount);
            Client.EVMTokenAmount [] memory tokenAmounts = new Client.EVMTokenAmount[](1);
            tokenAmounts[0]=   Client.EVMTokenAmount({
            token:address(weth),
            amount:amount
        });
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(  questCID,reward,orgId,deadline,signature,nonce),
            tokenAmounts: tokenAmounts,
            extraArgs: "",
            feeToken: payFeesIn == PayFeesIn.LINK ? i_link : address(0)
        });

        uint256 fee = IRouterClient(i_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;

        if (payFeesIn == PayFeesIn.LINK) {
            // LinkTokenInterface(i_link).approve(i_router, fee);
            messageId = IRouterClient(i_router).ccipSend(
                destinationChainSelector,
                message
            );
        } else {
            messageId = IRouterClient(i_router).ccipSend{value: fee}(
                destinationChainSelector,
                message
            );
        }

        emit MessageSent(messageId);
}


}
