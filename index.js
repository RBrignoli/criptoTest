
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import user_routes from './routes/users.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/user', user_routes)

app.listen(8000)