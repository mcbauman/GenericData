require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');
const KeySchema = require("./keySchema.JS")
//const ValueSchema = require("./valueSchema.js")

const valueSchema=new mongoose.Schema({},{
    toJSON:{
        transform(doc,ret){
            delete ret._id
            delete ret.__v
        }
    }
})
const ValueSchema=mongoose.model("Values",valueSchema)

// Configuaration Mongoose connetction
function connectMongoose(){
    const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
    const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
  
    mongoose.connection.on("connecting", () => console.log("[DB]Mongoose connecting"));
    mongoose.connection.on("connected", () => console.log("[DB]Mongoose connected"));
    mongoose.connection.on("disconnecting", () =>console.log("[DB]Mongoose disconnecting"));
    mongoose.connection.on("disconnected", () =>console.log("[DB]Mongoose disconnected"));
    mongoose.connection.on("reconnected", () => console.log("[DB]Mongoose reconnected"));
    mongoose.connection.on("error", (er) => console.log("[DB]Mongoose error", er));
  
    mongoose.connect(connectionString);
}

connectMongoose()

const app=express();
app.use(cors());
app.use(express.json());

//KEYS via Mongoose
app.get("/requestKeys",async (req,res)=>{
    try {
        const result = await KeySchema.find()
        let genericSchema={}
        result.forEach(element=>{
            genericSchema[element.name]=element.type
        })
        valueSchema.add(genericSchema)
        res.send(result)   
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/postKeys", async (req,res)=>{
    console.log(req.body);
    try {
        const result = await KeySchema.create(req.body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.delete("/removeKey", async (req, res)=>{
    try {
        const result=await KeySchema.deleteOne(req.body)
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/getValues", async (req,res)=>{
    try {
       const result = await ValueSchema.find()
       res.send(result) 
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/addValues", async (req,res)=>{
    try {
        const result = await ValueSchema.create(req.body)
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(process.env.PORT,()=>{
    console.log("Server up on ", process.env.PORT);
})