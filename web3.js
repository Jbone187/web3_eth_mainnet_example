const Web3 = require('web3')

const rpcURL: string = "https://mainnet.infura.io/v3/#######"

const web3 = new Web3(rpcURL)

const account: string = "############################"

web3.eth.getBalance(account, (err, wei: string): any => {
    const balance: string = web3.utils.fromWei(wei, 'ether')

    console.log(balance);
});
