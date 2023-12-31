// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";

contract SigUtils is EIP712 {
 
    constructor()EIP712("Quest Controller", "1")  {
     }

   
    // computes the hash of a permit
    function _getCreateRequstStructHash( bytes memory questCID,
        uint256 reward,
        uint256 orgId,
        uint256 deadline,
        uint256 nonce)
        internal
        view
        returns ( bytes32 digest)
    {
      

           digest  = _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "CreateQuest(uint256 orgId,bytes questCID,uint256 reward,uint256 deadline,uint256 nonce)"
                    ),
                    orgId,
                    keccak256(questCID),
                    reward,
                    deadline,
                    nonce
                )
            )
        );
    }
    function _getCreateOrgStructHash(   string memory name,
        bytes memory imageCID,
        uint256 nonce)
        internal
        view
        returns ( bytes32 digest)
    {
      

           digest  =  _hashTypedDataV4(
            keccak256(
                abi.encode(
                    keccak256(
                        "CreateOrganization(address admin,string name,bytes imageCID,uint256 nonce)"
                    ),
                    msg.sender,
                    keccak256(bytes(name)),
                    keccak256(imageCID),
                    nonce
                )
            )
        );
    }


}
