import queryString from 'query-string'
import { get_url_to_call, create_or_update_coins } from '../utils/coins.js'

const list_coins = async (req, res) => {
    try {
        const response = await fetch(get_url_to_call(`/coins/list`))
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coins list' })
    }
}

const get_current_currency = async (req, res) => {
    const { ids, vs_currency, order, per_page, page, sparkline, price_change_percentage } = req.query
    const queryParams = queryString.stringify({ ids, vs_currency, order, per_page, page, sparkline, price_change_percentage })
    try {
        const response = await fetch(get_url_to_call(`/coins/markets`, `&${queryParams}`))
        const data = await response.json()
        create_or_update_coins(data)
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch market data' })
    }
}

const get_coin_details = async (req, res) => {
    const { id } = req.params
    try {
        const response = await fetch(get_url_to_call(`/coins/${id}`))
        const data = await response.json()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch coin details' })
    }
}

export { list_coins, get_current_currency, get_coin_details }