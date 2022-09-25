import assert from 'assert';
import ganache from 'ganache';
import Web3 from 'web3';
import { inboxInterface, inboxBytecode } from '../compile';
import { describe, it, beforeEach } from 'mocha';

const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(inboxInterface)
    .deploy({ data: inboxBytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox Contract', () => {
  it('deploys properly', () => {
    assert.ok(inbox.options.address);
  });

  it('', () => {

  });
});
