#!/usr/bin/python3.8

from brownie import HashStorage, accounts
import time

def main():
    ctrct=HashStorage.deploy({'from': accounts[2]})
    print(ctrct.address)
    return ctrct.address
