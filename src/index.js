const express = require("express");
const app = express();
const db = require("./config/db");
app.use(express.json);

app.get('/',(req,res,next)=>{
    res.send(" Welcome to our Zshop. Have a look around!");
})

db.connectToDb().then(() => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
});
