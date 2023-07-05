const express=require("express");
const app=express();
const port=9000;
app.listen(port,()=>{
    console.log('starting port on server',port);

})
app.get("/",(req,res)=>{
  res.json({message:"hello from express app"});
})