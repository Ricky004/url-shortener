import express from 'express'
import { connectDB } from './DB/config.js'

import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const app = express()

connectDB()

// routes 
import urlRoutes from "./routes/urls.js"
import indexRoutes from "./routes/index.js"


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", indexRoutes)
app.use("/api", urlRoutes)

// server setup
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})