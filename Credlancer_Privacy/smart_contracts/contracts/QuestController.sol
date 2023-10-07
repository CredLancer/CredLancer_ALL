// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

import "./Credential.sol";
import "./OrganizationController.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {LibIpfs} from "./LibIpfs.sol";

contract QuestController is Ownable, Pausable, EIP712 {
    using ECDSA for bytes32;

    enum ProposalStatus {
        Proposed,
        Accepted,
        Rejected,
        Awarded
    }

    enum QuestStatus {
        Open,
        Closed,
        Awarded
    }

    struct Quest {
        uint256 id;
        string cid;
        uint256 reward;
        uint256 orgId;
        uint256 deadline;
        uint256 winnerProposalId;
    }

    struct Proposal {
        uint256 id;
        string cid;
        address proposer;
        uint256 questId;
        ProposalStatus status;
        string workCID;
    }

    mapping(uint256 questId => Quest quest) public quests;
    mapping(uint256 proposalId => Proposal proposal) public proposals;
    mapping(uint256 questId => mapping(address proposer => uint256 proposalId))
        public proposalIds;
    mapping(uint256 nonce => bool isUsed) public nonceUsed;
    mapping(address user => uint256 balance) public balanceOf;

    uint256 public totalQuests;
    uint256 public totalProposals;
    address public signer;

    Credential public credential;
    OrganizationController public organizationController;

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
    event ProposalStatusChanged(
        uint256 indexed questId,
        uint256 indexed proposalId,
        ProposalStatus oldStatus,
        ProposalStatus newStatus
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

    constructor(
        OrganizationController _organizationController,
        Credential _credential
    ) EIP712("Quest Controller", "1") {
        organizationController = _organizationController;
        credential = _credential;
        signer = msg.sender;
    }

    modifier verifyProposalAndAdmin(uint256 proposalId) {
        if (!proposalExists(proposalId)) revert InvalidProposalId();
        uint256 questId = proposals[proposalId].questId;
        uint256 orgId = quests[questId].orgId;
        if (organizationController.adminOf(orgId) != msg.sender) {
            revert Unauthorized();
        }
        _;
    }

    // view methods

    function statusOfQuest(uint256 questId) public view returns (QuestStatus) {
        if (!questExists(questId)) revert InvalidQuestId();
        Quest memory quest = quests[questId];
        if (quest.winnerProposalId != 0) return QuestStatus.Awarded;
        if (quest.deadline < block.timestamp) return QuestStatus.Closed;
        return QuestStatus.Open;
    }

    // admin methods

    function setSigner(address newSigner) public onlyOwner {
        signer = newSigner;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // organization admin methods

    function acceptWork(
        uint256 proposalId
    ) public verifyProposalAndAdmin(proposalId) {
        Proposal memory proposal = proposals[proposalId];
        Quest memory quest = quests[proposal.questId];
        ProposalStatus oldStatus = proposal.status;

        // check the conditions
        if (statusOfQuest(proposal.questId) == QuestStatus.Awarded) {
            revert RewardAlreadyGranted();
        }
        if (proposal.status != ProposalStatus.Accepted) {
            revert ProposalNotAccepted();
        }

        // update the proposal status
        proposals[proposalId].status = ProposalStatus.Awarded;

        // update the quest status
        quests[proposal.questId].winnerProposalId = proposalId;

        // increment balance
        balanceOf[proposal.proposer] += quest.reward;

        // mint credential nft
        credential.mint(proposal.proposer, proposal.questId, 1, "");

        emit ProposalStatusChanged(
            proposal.questId,
            proposalId,
            oldStatus,
            ProposalStatus.Awarded
        );
    }

    // user methods

    function createQuest(
        string calldata questCID,
        uint256 reward,
        uint256 orgId,
        uint256 deadline,
        bytes calldata signature,
        uint256 nonce
    ) public payable whenNotPaused {
        if (nonceUsed[nonce]) {
            revert InvalidNonce();
        }
        if (!organizationController.exists(orgId)) {
            revert InvalidOrganizationId();
        }
        if (organizationController.adminOf(orgId) != msg.sender) {
            revert Unauthorized();
        }
        if (deadline <= block.timestamp) revert DeadlineAlreadyPassed();
        if (msg.value != reward) revert InvalidValue();
        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "CreateQuest(uint256 orgId,string questCID,uint256 reward,uint256 deadline,uint256 nonce)"
                    ),
                    orgId,
                    keccak256(abi.encodePacked(questCID)),
                    reward,
                    deadline,
                    nonce
                )
            )
        );
        address _signer = digest.recover(signature);
        if (_signer != signer) revert InvalidSignature();
        nonceUsed[nonce] = true;

        bool isValid = LibIpfs.isValidCid(questCID);
        if (!isValid) {
            revert InvalidCid();
        }

        uint256 questId = ++totalQuests;
        quests[questId] = Quest({
            id: questId,
            cid: questCID,
            reward: reward,
            orgId: orgId,
            deadline: deadline,
            winnerProposalId: 0
        });
        emit QuestCreated(questId, orgId, questCID, deadline, reward);
    }

    function sendProposal(
        uint256 questId,
        string calldata proposalCID,
        bytes calldata signature,
        uint256 nonce
    ) public {
        if (nonceUsed[nonce]) revert InvalidNonce();
        if (!questExists(questId)) revert InvalidQuestId();
        if (proposalIds[questId][msg.sender] != 0) revert ProposalAlreadySent();
        if (statusOfQuest(questId) != QuestStatus.Open) revert QuestNotOpen();
        if (
            organizationController.adminOf(quests[questId].orgId) == msg.sender
        ) {
            revert OrganizationAdminCannotApply();
        }

        // verify the signature
        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "SendProposal(uint256 questId,address proposer,string proposalCID,uint256 nonce)"
                    ),
                    questId,
                    msg.sender,
                    keccak256(abi.encodePacked(proposalCID)),
                    nonce
                )
            )
        );
        address _signer = digest.recover(signature);
        if (_signer != signer) revert InvalidSignature();
        nonceUsed[nonce] = true;

        bool isValid = LibIpfs.isValidCid(proposalCID);
        if (!isValid) {
            revert InvalidCid();
        }

        uint256 proposalId = ++totalProposals;
        proposals[proposalId] = Proposal({
            id: proposalId,
            cid: proposalCID,
            proposer: msg.sender,
            questId: questId,
            status: ProposalStatus.Proposed,
            workCID: ""
        });
        proposalIds[questId][msg.sender] = proposalId;
        emit ProposalCreated(questId, proposalId, msg.sender, proposalCID);
    }

    function submitWork(
        uint256 questId,
        string calldata workCID,
        bytes calldata signature,
        uint256 nonce
    ) public {
        if (nonceUsed[nonce]) revert InvalidNonce();
        if (!questExists(questId)) revert InvalidQuestId();
        if (statusOfQuest(questId) != QuestStatus.Open) revert QuestNotOpen();
        uint256 proposalId = proposalIds[questId][msg.sender];
        if (proposalId == 0) revert ProposalNotFound();
        Proposal memory proposal = proposals[proposalId];
        if (proposal.status != ProposalStatus.Accepted) {
            revert ProposalNotAccepted();
        }
        if (keccak256(bytes(proposal.workCID)) == keccak256(bytes(workCID))) {
            revert WorkAlreadySubmitted();
        }

        // verify the signature
        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "SubmitWork(uint256 questId,address proposer,string workCID,uint256 nonce)"
                    ),
                    questId,
                    msg.sender,
                    keccak256(abi.encodePacked(workCID)),
                    nonce
                )
            )
        );
        address _signer = digest.recover(signature);
        if (_signer != signer) revert InvalidSignature();
        nonceUsed[nonce] = true;

        bool isValid = LibIpfs.isValidCid(workCID);
        if (!isValid) {
            revert InvalidCid();
        }
        proposals[proposalId].workCID = workCID;
        emit WorkSubmitted(questId, proposalId, msg.sender, workCID);
    }

    function withdraw(address withdrawalAddress) public {
        if (balanceOf[msg.sender] == 0) revert InsufficientBalance();
        uint256 amount = balanceOf[msg.sender];
        balanceOf[msg.sender] = 0;

        _transferFunds(withdrawalAddress, amount);
        emit FundTransferred(msg.sender, withdrawalAddress, amount);
    }

    function acceptProposal(
        uint256 proposalId
    ) public verifyProposalAndAdmin(proposalId) {
        _changeProposalStatus(proposalId, ProposalStatus.Accepted);
    }

    function rejectProposal(
        uint256 proposalId
    ) public verifyProposalAndAdmin(proposalId) {
        _changeProposalStatus(proposalId, ProposalStatus.Rejected);
    }

    function proposalExists(uint256 proposalId) public view returns (bool) {
        return proposalId <= totalProposals && proposalId != 0;
    }

    function questExists(uint256 questId) public view returns (bool) {
        return questId <= totalQuests && questId != 0;
    }

    function _changeProposalStatus(
        uint256 proposalId,
        ProposalStatus newStatus
    ) private {
        // TODO: check if quest is closed first
        Proposal memory proposal = proposals[proposalId];
        if (proposal.status == ProposalStatus.Awarded) {
            revert WorkAlreadyRewarded();
        }
        if (proposal.status == newStatus) revert ProposalAlreadyInSameStatus();
        ProposalStatus oldStatus = proposal.status;
        proposals[proposalId].status = newStatus;
        emit ProposalStatusChanged(
            proposal.questId,
            proposalId,
            oldStatus,
            newStatus
        );
    }

    function _transferFunds(address receiver, uint256 amount) private {
        (bool success, ) = receiver.call{value: amount}("");
        if (!success) revert FundTransferFailed();
    }
}
