// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ITalentLayerService} from "talentlayer-id-contracts/contracts/interfaces/ITalentLayerService.sol";

import {LibIpfs} from "./LibIpfs.sol";
import "./Credential.sol";

/// @title wrapper around TalentLayerService using Request network
contract ServiceController is Ownable, Pausable {
    ITalentLayerService public talentLayerService;

    event QuestCreated(
        uint256 indexed questId,
        uint256 indexed organizationId,
        string questCID,
        uint256 deadline,
        uint256 reward
    );
    event ProposalCreated(
        uint256 indexed questId,
        uint256 indexed proposalId,
        address indexed proposer,
        string proposalCID
    );
    event WorkSubmitted(
        uint256 indexed questId,
        uint256 indexed proposalId,
        address indexed worker,
        string workCID
    );
    event FundTransferred(
        address indexed lancer,
        address indexed withdrawalAddress,
        uint256 amount
    );

    error InvalidOrganizationId();
    error Unauthorized();
    error InvalidValue();
    error InvalidQuestId();
    error InvalidProposalId();
    error ProposalAlreadySent();
    error ProposalAlreadyInSameStatus();
    error ProposalAlreadyRejected();
    error QuestNotOpen();
    error ProposalNotFound();
    error ProposalNotAccepted();
    error OrganizationAdminCannotApply();
    error InvalidNonce();
    error InvalidSignature();
    error DeadlineAlreadyPassed();
    error FundTransferFailed();
    error InsufficientBalance();
    error WorkAlreadySubmitted();
    error RewardAlreadyGranted();
    error WorkAlreadyRewarded();

    error InvalidCid();

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
