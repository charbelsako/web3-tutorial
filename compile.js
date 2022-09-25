import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import solc from 'solc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

const inputData = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const formattedInputData = JSON.stringify(inputData);

const output = solc.compile(formattedInputData);
const formattedOutput = JSON.parse(output);

export const contracts = formattedOutput.contracts;
export const inboxObject = contracts['Inbox.sol'];
export const inboxContract = inboxObject.Inbox;
export const inboxInterface = inboxContract.abi;
export const inboxBytecode = inboxContract.evm.bytecode.object;
