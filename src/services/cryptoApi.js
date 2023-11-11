// coin geko URL
const Base_Url = 'https://api.coingecko.com/api/v3';

// api key 
const Api_Key = 'CG-4LB2Yu3AaEEQecvza4t3jHve';

const fetchCoinsList = ()=> {
    return `${Base_Url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=2&x_cg_demo_api_key=${Api_Key}`
}

export {fetchCoinsList} ;