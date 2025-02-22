
import express from 'express';
import { list_coins, get_current_currency, get_coin_details } from '../controllers/cripto.js';
import cookieValidator from '../utils/cookieValidator.js';

const coin_router = express.Router();

coin_router.get('/coins/', cookieValidator,list_coins);
coin_router.get('/coins/markets',  cookieValidator, get_current_currency);
coin_router.get('/coins/:id', cookieValidator, get_coin_details);

export default coin_router;
