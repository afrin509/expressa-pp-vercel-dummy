import express from "express";
const app=express();
const port=9000;
app.listen(9000,()=>{
    console.log('starting port on server',9000);

})
app.listen("/",(req,res)=>{
  res.json({message:"hello from express app"});
})