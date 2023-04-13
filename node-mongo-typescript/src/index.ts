import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()

mongoose.connect(`${process.env.DATABASE_URL}${process.env.DATABASE}`)
    .then(() => console.log("Database Connected!"))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(process.env.PORT || 8080, () => console.log("Server run on port 8080"))

app.use('/api', authRoute)