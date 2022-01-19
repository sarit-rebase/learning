const express = require('express')

const app = express();

app.get("/", (req : any , res: any)=>{
    res.send("Hello World!")
})

app.get("/version", (req : any , res: any)=>{
    res.send({v:1})
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})
