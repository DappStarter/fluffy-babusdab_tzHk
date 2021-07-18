require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name raise machine exchange inflict cart flat gate'; 
let testAccounts = [
"0xf6325b7ebd12e5e306a7f0d1c7eca58099d167aaf994d8306c9304c36ccb0dff",
"0x6669aef842619be33e3b38c91c706543612260084e9e957cfabd7465b5fb6cf1",
"0xa4cffc6defd16faebfdc3a911523ce1b79a3abd81f60d4009c2fb78af3e72277",
"0x7ac478387a667c7f2de15e7583d26ae80c1463dca0564f60971ed1d077201370",
"0xf0ac57986ccf6580b2bea6fd6f82ec2af1b7fd1e86c91d89c08a195faabaf88a",
"0x24b3ee1ec1460b074a74918dd9500c16cc53bf845216c5404037422f64768ef8",
"0xc40fc3a67522f32188716f0a86ca40a28fe2d63508eef48df9d6947806e47664",
"0xfcf63976a5b7625c0f684f5d7e57ce72604c980e8fb3970a8d76004d27948e93",
"0x9c0fd7d375edc8597219e03f5c27cfd7d040940fdc6d706da6296fce4681ac97",
"0x8b5914a13eba141afa7f2a6df7c8e6b627ce7e56d7b36d7051077f947deddc5a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

