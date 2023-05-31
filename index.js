const express= require("express");
const cors=require("cors");
const dotenv = require("dotenv").config();
const app=express();
const connectDb =require("./config/dbConfig.js");

const PORT =process.env.PORT || 6001;


//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use("/api/todo", require("./routes/route.js"));

app.listen(PORT,()=>{
    try {
        console.log("connected to port",PORT);
        //connect to mongodb database only if succesfully connected to port
        connectDb();
    } catch (error) {
        console.log("Not connected");
    }
});