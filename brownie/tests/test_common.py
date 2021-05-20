#!/usr/bin/python3
import brownie
import time


# https://github.com/mixbytes/brownie-example

def test_check_hash(accounts, contract):
    hash: str = "QmPkD4zFq21M4oTNNSbMWgHp8kDXYMRRBdHy6kxniVdx3P"
    contract.setFileIPFSHash(hash)
    assert contract.getFileIPFSHash() == hash
