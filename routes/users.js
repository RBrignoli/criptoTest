import express from 'express'
import {get_user, list_users, delete_user, create_user, change_image, update_user} from '../controllers/users.js'
import cookieValidator from '../utils/cookieValidator.js'
const user_routes = express.Router()


user_routes.post('', create_user)
user_routes.get('/:id', cookieValidator ,get_user)
user_routes.get('/', cookieValidator ,list_users)
user_routes.delete('/:id', cookieValidator ,delete_user)
user_routes.post('/:id', cookieValidator ,update_user)
user_routes.post('/trocar-img/:id', cookieValidator ,change_image)


export default user_routes