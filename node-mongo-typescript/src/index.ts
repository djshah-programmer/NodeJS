import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

mongoose.connect(`${process.env.DATABASE_URL}${process.env.DATABASE}`)
    .then(() => console.log("Database Connected!"))
    .catch(err => console.log(err))

app.listen(process.env.PORT || 8080, () => console.log("Server run on port 8080"))