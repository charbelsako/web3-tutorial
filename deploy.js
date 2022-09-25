
import HDWalletProvider from 'truffle-hdwallet-provider';
import Web3 from 'web3';
import { inboxBytecode, inboxInterface } from './compile';

const provider = new HDWalletProvider(
  'dune citizen empower naive round nephew nerve major pair gauge way stick',
  'https://goerli.infura.io/v3/ab278992c722451f934d00b973d53a5e');

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Deploying from account', accounts[0]);
  const result = await new web3.eth.Contract(inboxInterface)
    .deploy({ data: inboxBytecode, arguments: ['Hi there you faggot'] })
    .send({ gat: '1000000', from: accounts[0] });
  console.log('Deployed to Goerli from address', result.options.address);
};

deploy();
