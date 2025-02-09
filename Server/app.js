import express from 'express'
import cookieParser from 'cookie-parser' 
import cors from 'cors' 
import CONFIG from './src/config/config.js';
import TMRoutes from './src/routes/index.js'


const app =express()

const corsOptions = {
    origin: CONFIG.REACT_BASE_URL,            
}

app.use(cors(corsOptions))    

app.use(cookieParser())   

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Task-Manager")
});

app.use('/api', TMRoutes)


export {app}