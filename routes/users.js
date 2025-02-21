import express from 'express'
import {get_user, list_users, delete_user, create_user, change_image, update_user} from '../controllers/users.js'

const user_routes = express.Router()


user_routes.get('/:id', get_user)
user_routes.get('/', list_users)
user_routes.delete('/:id', delete_user)
user_routes.post('/:id', update_user)
user_routes.post('', create_user)
user_routes.post('/trocar-img/:id', change_image)


export default user_routes