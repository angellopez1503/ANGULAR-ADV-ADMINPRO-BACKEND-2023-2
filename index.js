import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnection from "./database/config.js"

//Crear el servidor de express
const app = express()

const whitelist = ['http://localhost:4200', undefined]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

dotenv.config()

dbConnection()

console.log(process.env.PORT);

//Rutas
app.get('/',(req,res)=>{
    res.status(400).json({
        ok:true,
        msg:'Hola Mundo'
    })
})

const puerto = process.env.PORT
app.listen(puerto,()=>{
    console.log('Puerto '+puerto);
})