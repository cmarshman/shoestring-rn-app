const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate ("c57cb09c27a213086ad99fc487ce9cb789b6a6cfb6a6cf3ea62b34fba1615584b0");
const myWalletAddress = myKey.getPublic('hex');

let coryCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction('myKey')
coryCoin.addTransaction(tx1);

console.log('\n Starting the Miner ...');
coryCoin.minePendingTransactions(myWalletAddress);


console.log('\n Balance of xavier is: ', coryCoin.getBalanceOfAddress(myWalletAddress));



// console.log('\n Starting the Miner again ...');
// coryCoin.minePendingTransactions('xaviers-address');

// console.log('\n Balance of xavier is: ', coryCoin.getBalanceOfAddress('xaviers-address'));

// console.log('Mining Block 1 ...');
// coryCoin.addBlock(new Block(1, '01/02/2020', { amount: 4}))

// console.log('Mining Block 2 ...')
// coryCoin.addBlock(new Block(1, '01/04/2020', { amount: 200}))

// // console.log('Is blockchainvalid?' + coryCoin.isChainValid());

// // console.log(JSON.stringify(coryCoin, null, 4));