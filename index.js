const axios = require('axios');

async function getBnbPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
    const bnbPrice = response.data.binancecoin.usd;
    return bnbPrice;
  } catch (error) {
    console.error('Error retrieving BNB price:', error);
    throw error;
  }
}

module.exports = {
  getBnbPrice
};
