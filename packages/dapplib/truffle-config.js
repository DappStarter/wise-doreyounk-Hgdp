require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food eight rice nominee combine install infant slot gentle'; 
let testAccounts = [
"0xf5bb24e2155c011d8eb548475d5642fa782d9dbf370bc9efaa621573ada2bcd7",
"0x5cceed19f54245451348b6d622a131c1a882722be51a43fc6577b6eca9d3015f",
"0x355311c550973ca78a1e223c4596cd9d61a004da27bf9b67d7ff58c19181124b",
"0x28791d2a8b6286ea525954e82b72acdc33f59ba2a04f6001f4259a30ee66bbee",
"0x7528a20afa5ca18d2a6f048ce9f27f6ae20abeae51e49c1d868ce677c2ee1221",
"0x9aaa6423dcb51843d91db8ff5cf044a5d59a20744b764dbab3a1eedb28eb8585",
"0x8522398fe436a6b129299bdf0d8e9555ed7a7f50c690c27d06268e4a61085c73",
"0xa50b76e1f01a70703120a60c8271410290ca7962f7cd41d9a29333549a2b8b6b",
"0x0fc47a971b0336ced6cf0041984a6fe72eea1261e18230e7559cc755f11395b8",
"0x007082e41ec93adfa987c1dcfb7387d43e9d6ef7f23bff32ab153ef137696f7b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

