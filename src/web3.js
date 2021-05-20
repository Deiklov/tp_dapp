// //overrides metamask v0.2 for our 1.0 version.
//1.0 lets us use async and await instead of promises

import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
const ethEnabled = async () => {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        return true;
    }
    return false;
};

ethEnabled();

export default new Web3(window.ethereum);