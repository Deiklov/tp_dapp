import web3 from './web3';

// const address = '0x3194cBDC3dbcd3E11a07892e7bA5c3394048Cc87';
const address = process.env.REACT_APP_ETH_CONTRACT_ADDRESS;

const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "file",
                "type": "string"
            }
        ],
        "name": "setFile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userFiles",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
export default new web3.eth.Contract(abi, address);