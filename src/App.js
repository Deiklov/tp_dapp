import {Table, Button, Form} from 'react-bootstrap';
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import ipfs from './ipfs';
import storehash from './storehash';

class App extends Component {

    state = {
        ipfsHash: null,
        imgSrc: '',
        buffer: '',
        ethAddress: '',
        blockNumber: '',
        transactionHash: '',
        gasUsed: '',
        txReceipt: '',
        ipfsHashInput: null,
    };

    captureFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const file = event.target.files[0];
        let reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => this.convertToBuffer(reader)
    };

    convertToBuffer = async (reader) => {
        //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
        //set this buffer -using es6 syntax
        this.setState({buffer});
    };
    onSubmitHashForm = async (e) => {
        e.preventDefault();
        const accounts = await web3.eth.getAccounts();

        const result = await storehash.methods.getFileIPFSHash().call({
            from: accounts[0]
        });
        console.log("got from contract:", result);
        await this.setState({ipfsHashInput: result});

        console.log(this.state.ipfsHashInput);
        const data = await ipfs.get(this.state.ipfsHashInput);
        console.log(data[0].content);
        this.setState({
            imgSrc:
                URL.createObjectURL(new Blob([data[0].content], {type: 'image/png'}))
        });
    };


    onSubmit = async (event) => {
        event.preventDefault();

        //bring in user's metamask account address
        const accounts = await web3.eth.getAccounts();

        console.log('Sending from Metamask account: ' + accounts[0]);

        const ethAddress = await storehash.options.address;
        this.setState({ethAddress});

        //save document to IPFS
        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
            console.log(err, ipfsHash);
            //setState by setting ipfsHash to ipfsHash[0].hash
            this.setState({ipfsHash: ipfsHash[0].hash});

            console.log("accs", accounts);
            storehash.methods.setFileIPFSHash(this.state.ipfsHash).send({
                from: accounts[0],
                gasPrice: '0'
            }, (error, transactionHash) => {
                console.log(transactionHash);
                this.setState({transactionHash});
            });
        })
    };

    render() {

        return (
            <div className="App">
                <h1> Ethereum and IPFS with Create React App</h1>

                <hr/>

                <h3> Choose file to send to IPFS </h3>
                <Form onSubmit={this.onSubmit}>
                    <input type="file" onChange={this.captureFile}/>
                    <Button bsStyle="primary" type="submit">
                        Сохранить в блокчейн
                    </Button>
                </Form>

                <hr/>

                <Table bordered responsive>
                    <thead>
                    <tr>
                        <th>Tx Receipt Category</th>
                        <th>Values</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>IPFS Hash # stored on Eth Contract</td>
                        <td>{this.state.ipfsHash}</td>
                    </tr>
                    <tr>
                        <td>Ethereum Contract Address</td>
                        <td>{this.state.ethAddress}</td>
                    </tr>

                    <tr>
                        <td>Tx Hash #</td>
                        <td>{this.state.transactionHash}</td>
                    </tr>

                    <tr>
                        <td>Block Number #</td>
                        <td>{this.state.blockNumber}</td>
                    </tr>

                    <tr>
                        <td>Gas Used</td>
                        <td>{this.state.gasUsed}</td>
                    </tr>
                    </tbody>
                </Table>
                <h3> Insert IPFS hash to load file </h3>
                <Form onSubmit={this.onSubmitHashForm}>
                    <Button bsStyle="primary" type="submit">
                        Получить картинку
                    </Button>
                </Form>
                {this.state.imgSrc && <img src={this.state.imgSrc} alt="picture from ipfs"/>}
            </div>
        );
    } //render
}

export default App;
