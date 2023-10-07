// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Pausable} from "@openzeppelin/contracts/security/Pausable.sol";
import {ITalentLayerService} from "talentlayer-id-contracts/contracts/interfaces/ITalentLayerService.sol";

/// @title wrapper around TalentLayerService using Request network
contract ServiceController is Ownable, Pausable {
    ITalentLayerService public talentLayerService;

    constructor(address _talentLayerService) {
        talentLayerService = ITalentLayerService(_talentLayerService);
    }

    // admin methods

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // freelancer methods

    function createProposalWithInvoice(
        uint256 _serviceId,
        address _rateToken,
        uint256 _rateAmount,
        uint256 _platformId,
        string calldata _dataUri
    ) external payable {
        talentLayerService.createProposal(
            _serviceId,
            _rateToken,
            _rateAmount,
            _platformId,
            _dataUri
        );
    }
}
