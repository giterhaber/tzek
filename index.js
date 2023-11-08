// function getETH(address) {
//    const getKEY =  web3.eth.accounts.privateKeyToAccount(`${address}`)
//    console.log(getKEY.address);
// }

// const ethKey = web3.eth.accounts.privateKeyToAccount('859337df7ab17a6b4f2ced436faa070afeb8d3eb2f2dab65c9371ccdf8d1d226');
// const ethADDR = ethKey.address
// console.log(ethADDR);

// getETH('859337df7ab17a6b4f2ced436faa070afeb8d3eb2f2dab65c9371ccdf8d1d226')

//MNEMONIC
// let mnemonic = "imitate general thrive bundle tissue engine warm casino portion similar family much";
// let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
// const mnemonicPrivate = mnemonicWallet.privateKey
// console.log(mnemonicPrivate);

// getETH(mnemonicPrivate)

//BALANCE
// web3.eth.getBalance("0x52bc44d5378309EE2abF1539BF71dE1b7d7bE3b5", function(err, result) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(web3.utils.fromWei(result, "ether") + " ETH")
//     }
//   })

//example

// const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/c3399226d51148cfa10ab3390973ce70"));

function MNEMONIC(address) {
  let mnemonicWallet = ethers.Wallet.fromMnemonic(address);
  const mnemonicPrivate = mnemonicWallet.privateKey;
  console.log(mnemonicPrivate);
  console.log(mnemonicWallet.address);

  $('#publicaddr').html(mnemonicWallet.address);
}

// function PRIVATE(address) {
//   const getKEY = web3.eth.accounts.privateKeyToAccount(address);
//   console.log(getKEY.address);
// }

function PRIVATE(address) {
  const getKEY = web3.eth.accounts.privateKeyToAccount(address);
  console.log(getKEY.address);
}

$('#getMnemonic').on('click', () => {
  const value = $('#mnemonic').val();
  MNEMONIC(value);
});

$('#getPrivatekey').on('click', () => {
  const value = $('#privateKey').val();
  PRIVATE(value);

  $('#data').html(`${PRIVATE(value)}`);
});

//imitate general thrive bundle tissue engine warm casino portion similar family much


$(document).ready(function() {
  $('#publicaddr').after('<button id="etherscan">etherscan</button>')
  

  
  $('#etherscan').on('click', () => {
  const v = $('#publicaddr').html()
  alert(v)
  window.open('https://etherscan.io/address/'+v)
})
})


$('#submit').on('click', () => {
  const v = $('#output').val()
  alert(v)
  window.open('https://etherscan.io/address/'+v)
})

