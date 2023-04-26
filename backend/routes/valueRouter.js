const express = require("express")
const checkAuth = require('../checkAuth')
const mongoose = require('mongoose');

const valueSchema=new mongoose.Schema({},{
    toJSON:{
        transform(doc,ret){
            delete ret.__v
        }
    }
})
const ValueSchema=mongoose.model("Values",valueSchema)

const valueRouter=express.Router()

valueRouter.get(checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /getValues")
    try {
       const result = await ValueSchema.find()
    //    console.log("GetValues",result);
       res.send(result) 
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

valueRouter.post(checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /addValues")
    try {
        // console.log("req.body",req.body);
        const result = await ValueSchema.create(req.body)
        // console.log("result",result);
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

valueRouter.put(checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /updateValue")
    console.log(req.body);
    try {
        const result= await ValueSchema.findOneAndUpdate({_id:req.body._id}, req.body,{new:true})
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

valueRouter.delete(checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /removeAllKeys")
    try {
        console.log("REQUEST on /deleteValue")
        // console.log(req.body);
        const result=await ValueSchema.findByIdAndDelete(req.body._id)
        // console.log(result);
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

module.exports = valueRouter