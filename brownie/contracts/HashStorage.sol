// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract HashStorage {
    mapping(address => string) public userFiles;

    function setFileIPFSHash(string memory fileHash) external {
        userFiles[msg.sender] = fileHash;
    }

    function getFileIPFSHash() external view returns (string memory){
        return userFiles[msg.sender];
    }
}
