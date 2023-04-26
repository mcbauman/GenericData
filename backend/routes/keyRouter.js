const express = require("express")
const checkAuth = require('../checkAuth')
const KeySchema = require("../keySchema.JS");

const keyRouter=express.Router()

keyRouter.get(checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /requestKeys")
    try {
        const result = await KeySchema.find().sort({index:1})
        let genericSchema={}
        result.forEach(element=>{
            if(element.type=="Array"){
                genericSchema[element.name]="String"
            }
            else if(element.type=="Object"){
                genericSchema[element.name]="Mixed"
            }
            else{
                genericSchema[element.name]=element.type
            }
        })
        valueSchema.add(genericSchema)
        res.send(result)   
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

keyRouter.post(checkAuth.checkAuth, async (req,res)=>{
    console.log("REQUEST on /postKeys")
    // console.log(req.body);
    try {
        const result = await KeySchema.create(req.body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

keyRouter.put(checkAuth.checkAuth, async (req,res)=>{
    console.log("UpdateKey",req.body);
    try {
        const result=await KeySchema.findByIdAndUpdate(req.body._id,req.body,{new:true})
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

keyRouter.delete(checkAuth.checkAuth, async (req, res)=>{
    console.log("REQUEST on /removeKey")
    try {
        const result=await KeySchema.deleteOne(req.body)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

module.exports = keyRouter