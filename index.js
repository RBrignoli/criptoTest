
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './utils/connector.js'
import user_routes from './routes/users.js'
import auth_router from './routes/auth.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/user', user_routes)
app.use('/auth', auth_router)

connectDB().then( () => {
    app.listen(process.env.PORT, () =>{
        console.log('Server successfully started at port 8000')
    })
}).catch(err => {
    console.log('Failed to start server', err)
})

