import  express from 'express'
import { log } from './Logs/logger.js'

const app=express()
app.set('trust proxy', true); // Add this line
app.get('/',(req,res)=>{
    const {ip,method,originalUrl}=req
    const date=new Date().toLocaleDateString()
    const currlog = `[${method}] ${originalUrl} "${ip}"  ${date}   \n`;
    log(currlog)
    res.json('hi')
})

app.get('/x',(req,res)=>{
    const {ip,method,originalUrl}=req
    const date=new Date().toLocaleDateString()
    const currlog = `[${method}] ${originalUrl} "${ip}"  ${date}   \n`;
    log(currlog)
    res.json(currlog)
})

app.listen(3000,()=>{
    console.log('server started');
    
})
