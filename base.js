import  express from 'express'
import { log } from './Logs/logger.js'

const app=express()

app.get('/',(req,res)=>{
    const {ip,method,originalUrl}=req
    const date=new Date().toLocaleDateString()
    const currlog = `[${method}] ${originalUrl} "${ip}"  ${date}   \n`;
    log(currlog)
    res.json('hi')
})

app.listen(3000,()=>{
    console.log('server started');
    
})