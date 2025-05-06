import fs from 'fs'
export function log(msg) {
    fs.appendFile('./Logs/logs.txt',`${msg}\n`,{
        encoding:'utf-8',
    },(err)=>{
        if(err) console.log(err);
        
    })
}