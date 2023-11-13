// coin geko URL
const Base_Url = 'https://api.coingecko.com/api/v3';

// api key 
const Api_Key = 'CG-4LB2Yu3AaEEQecvza4t3jHve';

const fetchCoinsList = (pages , currency , isShowPages)=> {
    return `${Base_Url}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${isShowPages}&page=${pages}&x_cg_demo_api_key=${Api_Key}`
}


const searchCoin = query => `${Base_Url}/search?query=${query}&x_cg_demo_api_key=${Api_Key}`;


export {fetchCoinsList , searchCoin} ;