
// const axios = require('axios');
// const API_KEY = '05869e79-c079-4660-b857-57d3dd51e92e'


// // const req = await axios.get("")
// let response = null;
// new Promise(async (resolve, reject) => {
//   try {
//     response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//       headers: {
//         'X-CMC_PRO_API_KEY': '05869e79-c079-4660-b857-57d3dd51e92e',
//       },
//     });
//   } catch(ex) {
//     response = null;
//     // error
//     console.log(ex);
//     reject(ex);
//   }
//   if (response) {
//     // success
//     const json = response.data;
//     console.log(json);
//     resolve(json);
//   }
// });

async function BTcToInr(){
  let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr")
  let data = await res.json()
 console.log(data)
  getTopCoin(data.bitcoin.inr)
}
BTcToInr()

async function getTopCoin(btcinr){
  let ress =await fetch("https://api.coingecko.com/api/v3/search/trending")
  let data = await ress.json()
}