#!/usr/bin/python3.8

from brownie import HashStorage, accounts
import time

def main():
    ctrct=HashStorage.deploy({'from': accounts[0]})
    print(ctrct.address)
    return ctrct.address
