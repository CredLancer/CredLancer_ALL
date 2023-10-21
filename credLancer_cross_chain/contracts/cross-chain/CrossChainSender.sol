// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

 import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/token/ERC20/IERC20.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {Withdraw} from "./utils/Withdraw.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract CrossChainSender is Withdraw {


        // Custom errors to provide more descriptive revert messages.
    uint64 public destinationChainSelector;
    address immutable i_router;
    address immutable i_link;
    uint16 immutable i_maxTokensLength;
 




    enum PayFeesIn {
        Native,
        LINK
    }




    constructor(address router, address link,uint64 destinationChainSelector_) {
        i_router = router;
        i_link = link;
        i_maxTokensLength = 5;
        IERC20(i_link).approve(i_router, type(uint256).max);
        destinationChainSelector = destinationChainSelector_;
    }
    function linkBalance (address account) public view returns (uint256) {
        return IERC20(i_link).balanceOf(account);
    }

    receive() external payable {}


    event MessageSent(bytes32 messageId);
    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees); // Used to make sure contract has enough balance to cover the fees.

}
