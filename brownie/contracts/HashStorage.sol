// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract HashStorage {
    mapping(address => string) public userFiles;

    function setFile(string memory file) external {
        userFiles[msg.sender] = file;
    }

}
