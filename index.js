
//Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')

//routes
const router = require('./Routes/router')


require('./DB/connection')

//Creates an express application
const etServer = express()

//use cors in express server
etServer.use(cors())
etServer.use(express.json())
etServer.use(router)


const PORT = 3000 || process.env.PORT

etServer.listen(PORT,()=>{
    console.log(`Expense Tracker Server started at PORT: ${PORT}`);
})

etServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red">Project Fair Server Started and Waiting for client request!!!</h1>`)

})