//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {ISemaphore} from "../interfaces/ISemaphore.sol";

contract Feedback {
    ISemaphore public semaphore;

    mapping(uint256 reviewId => string ipfsCid) public reviews;
    uint256 reviewCounter;

    mapping(uint256 organizationId => uint256[] reviewIds)
        internal reviewsByOrganization;
    mapping(uint256 profileId => uint256[] reviewIds) internal reviewsByProfile;

    uint256 public groupId;

    constructor(address semaphoreAddress, uint256 _groupId) {
        semaphore = ISemaphore(semaphoreAddress);
        groupId = _groupId;

        semaphore.createGroup(groupId, 20, address(this));
    }

    function joinGroup(uint256 identityCommitment) external {
        semaphore.addMember(groupId, identityCommitment);
    }

    function sendFeedback(
        uint256 feedback,
        uint256 merkleTreeRoot,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) external {
        semaphore.verifyProof(
            groupId,
            merkleTreeRoot,
            feedback,
            nullifierHash,
            groupId,
            proof
        );
    }
}
