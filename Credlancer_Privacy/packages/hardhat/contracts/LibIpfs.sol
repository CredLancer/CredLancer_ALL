// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

library LibIpfs {
    function isValidCid(
        string memory cid
    ) internal pure returns (bool isValid) {
        if (bytes(cid).length == 46) {
            isValid = true;
        }
    }
}
