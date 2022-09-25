import assert from 'assert';
import Web3 from 'web3';
import ganache from 'ganache';
import { describe, it, beforeEach } from 'mocha';
import { inboxInterface, inboxBytecode } from '../compile';

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
  it('Deploys properly', () => {
    assert.ok(inbox.options.address);
  });

  it('Has default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });

  it('Sets message properly', async () => {
    await inbox.methods
      .setMessage('Hello World!')
      .send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hello World!');
  });
});
