// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Pausable} from "@openzeppelin/contracts/security/Pausable.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

contract OrganizationController is Ownable, Pausable, EIP712 {
    using ECDSA for bytes32;

    struct Organization {
        uint256 id;
        string name;
        string imageCID;
        address admin;
    }

    mapping(uint256 organizationId => Organization organization)
        public organizations;
    mapping(address adminAddress => uint256 organizationId)
        public organizationIds;

    address public signer;
    mapping(uint256 nonce => bool isUsed) public nonceUsed;

    uint256 public totalOrganizations;

    error Unauthorized();
    error InvalidOrganizationId();
    error ZeroAddressCannotBeAdmin();
    error OrganizationsPerAddressLimitReached();
    error InvalidNonce();
    error InvalidSignature();

    event OrganizationCreated(
        uint256 indexed orgId,
        address indexed admin,
        string name,
        string imageCID
    );
    event AdminChanged(
        uint256 indexed orgId,
        address indexed oldAdmin,
        address indexed newAdmin
    );
    event OrganizationNameChanged(
        uint256 indexed orgId,
        string oldName,
        string newName
    );
    event OrganizationImageCIDChanged(
        uint256 indexed orgId,
        string oldImageCID,
        string newImageCID
    );

    constructor() EIP712("Organization Controller", "1") {
        signer = msg.sender;
    }

    modifier onlyAdmin(uint256 orgId) {
        if (!exists(orgId)) revert InvalidOrganizationId();
        if (organizations[orgId].admin != msg.sender) revert Unauthorized();
        _;
    }

    // view methods

    function adminOf(uint256 orgId) public view returns (address admin) {
        if (!exists(orgId)) revert InvalidOrganizationId();
        admin = organizations[orgId].admin;
    }

    function exists(uint256 orgId) public view returns (bool) {
        return orgId <= totalOrganizations && orgId != 0;
    }

    // admin methods

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function setSigner(address newSigner) public onlyOwner {
        signer = newSigner;
    }

    // organization admin methods

    function updateName(
        uint256 orgId,
        string calldata newName
    ) public whenNotPaused onlyAdmin(orgId) {
        string memory oldName = organizations[orgId].name;
        organizations[orgId].name = newName;
        emit OrganizationNameChanged(orgId, oldName, newName);
    }

    function updateImageCID(
        uint256 orgId,
        string calldata newImageCID,
        bytes memory signature,
        uint256 nonce
    ) public whenNotPaused onlyAdmin(orgId) {
        if (nonceUsed[nonce]) revert InvalidNonce();
        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "UpdateImageCID(uint256 orgId,string imageCID,uint256 nonce)"
                    ),
                    orgId,
                    keccak256(abi.encodePacked(newImageCID)),
                    nonce
                )
            )
        );
        address _signer = digest.recover(signature);
        if (_signer != signer) revert InvalidSignature();
        nonceUsed[nonce] = true;

        string memory oldImageCID = organizations[orgId].imageCID;
        organizations[orgId].imageCID = newImageCID;
        emit OrganizationImageCIDChanged(orgId, oldImageCID, newImageCID);
    }

    function changeAdmin(
        uint256 orgId,
        address newAdmin
    ) public whenNotPaused onlyAdmin(orgId) {
        if (newAdmin == address(0)) revert ZeroAddressCannotBeAdmin();
        if (organizationIds[newAdmin] != 0)
            revert OrganizationsPerAddressLimitReached();
        organizationIds[msg.sender] = 0;
        organizationIds[newAdmin] = orgId;
        organizations[orgId].admin = newAdmin;
        emit AdminChanged(orgId, msg.sender, newAdmin);
    }

    function createOrganization(
        string calldata name,
        string calldata imageCID,
        bytes calldata signature,
        uint256 nonce
    ) public whenNotPaused {
        if (nonceUsed[nonce]) revert InvalidNonce();
        if (organizationIds[msg.sender] != 0)
            revert OrganizationsPerAddressLimitReached();

        bytes32 digest = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "CreateOrganization(address admin,string name,string imageCID,uint256 nonce)"
                    ),
                    msg.sender,
                    keccak256(abi.encodePacked(name)),
                    keccak256(abi.encodePacked(imageCID)),
                    nonce
                )
            )
        );
        address _signer = digest.recover(signature);
        if (_signer != signer) revert InvalidSignature();
        nonceUsed[nonce] = true;

        uint256 orgId = ++totalOrganizations;
        organizations[orgId] = Organization({
            id: orgId,
            name: name,
            imageCID: imageCID,
            admin: msg.sender
        });
        organizationIds[msg.sender] = orgId;
        emit OrganizationCreated(orgId, msg.sender, name, imageCID);
    }
}
