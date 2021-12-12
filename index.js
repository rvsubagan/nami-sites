import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

app.use(bodParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log('Server is running...')))
    .catch(error => console.log(error))

