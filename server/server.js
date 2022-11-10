const  express= require("express")
const app= express()
const bodyparser=require("body-parser")
app.get("/",function (req,res)
{
    res.sendFile(__dirname+"Document.html")
})
