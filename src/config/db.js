const mongoose = require("mongoose");
require("dotenv").config();
const connectToDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectToDb}