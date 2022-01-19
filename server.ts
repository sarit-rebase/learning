const express = require('express')
const Version = require('./versionControl')


const app = express();

const initialTime : string = new Date().toString()


app.get("/", (req : any , res: any)=>{
    res.send("Hello World!")
})

app.get("/version", (req : any , res: any)=>{
    const version = new Version()
    res.send({it: initialTime, versionInfo: version})
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})
