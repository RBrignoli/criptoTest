import { Coin } from '../models/models.js';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

const get_url_to_call = (url, query = '') => {
    console.log(COINGECKO_API_URL + url + '?x_cg_demo_api_key=' + process.env.COINGECKO_API_KEY + query);
    return COINGECKO_API_URL + url + '?x_cg_demo_api_key=' + process.env.COINGECKO_API_KEY + query;
}

const create_or_update_coins = async (coins) => {
    try {
        coins.forEach(async (coin) => {
            const coinExist = await Coin.findOne({ coin_id: coin.id })
            if (coinExist) {
                coinExist.market_cap = coin.market_cap
                coinExist.price_change_percentage_24h = coin.price_change_percentage_24h
                // coinExist.price_change_percentage_7d = coin.price_change_percentage_7d
                coinExist.lowest_value = coin.atl
                coinExist.highest_value = coin.ath
                coinExist.current_price = coin.current_price
                await coinExist.save()
            }
            else {
                const newCoin = new Coin({
                    coin_id: coin.id,
                    market_cap: coin.market_cap,
                    price_change_percentage_24h: coin.price_change_percentage_24h,
                    // price_change_percentage_7d: coin.price_change_percentage_7d,
                    lowest_value: coin.atl,
                    highest_value: coin.ath,
                    current_price: coin.current_price
                })
                await newCoin.save()
            }
        })
    } catch (error) {
        console.log('Failed to create or update coins', error)
    }
}

export { get_url_to_call, create_or_update_coins }