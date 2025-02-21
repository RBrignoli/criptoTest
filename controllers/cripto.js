

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

const get_url_to_call = (url) => {
    return COINGECKO_API_URL + url + '?x_cg_demo_api_key=' + process.env.COINGECKO_API_KEY;
}

const list_coins = async (req, res) => {
    try {
        const response = await fetch(get_url_to_call(`/coins/list`));
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coins list' });
    }
};

const get_current_currency = async (req, res) => {
    const { vs_currency, ids } = req.query;
    try {
        const response = await fetch(get_url_to_call(`/coins/markets?vs_currency=${vs_currency}&ids=${ids}`))
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch market data' });
    }
};

const get_coin_details = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(get_url_to_call(`/coins/${id}`));
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coin details' });
    }
};

export { list_coins, get_current_currency, get_coin_details };