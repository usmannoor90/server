const express =require("express");

const router = express.Router()

router.get("/courses",(req,res)=>{
    res.send("course you want to see")
})


module.exports=router