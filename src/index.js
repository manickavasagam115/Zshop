const express = require("express");
const app = express();

app.get('/',(req,res,next)=>{
    res.send(" Welcome to our Zshop. Have a look around!");
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
}) 