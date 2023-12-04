
const Joi = require("joi")
const express = require("express");
const app = express();

app.use(express.json())

const courses = require("./Routes/get/course.js")


app.use("/api", courses)

app.get("/",(req,res)=>{

    res.send("hello world")

})

app.get("/api/courses",(req,res)=>{

    res.send(req.params)

})

const port  = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`listine to port number = ${port}`);
})



