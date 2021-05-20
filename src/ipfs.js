// run with local daemon
const IPFS = require('ipfs-api');
const ipfs = new IPFS({
    host: process.env.REACT_APP_IPFS_HOST,
    port: process.env.REACT_APP_IPFS_PORT,
    protocol: process.env.REACT_APP_IPFS_SCHEME
});
// const ipfs = create({ host: 'localhost', port: '5001', protocol: 'http' });


export default ipfs;