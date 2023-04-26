require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

// const userRouter = require("./routes/userRouter")
// const keyRouter = require("./routes/keyRouter")
// const valueRouter = require("./routes/valueRouter")

const KeySchema = require("./schemas/keySchema.js");
const UserSchema = require("./schemas/userSchema.js");
// const valueSchema = require("./valueSchema")
// const ValueSchema = require("./valueSchema")

const crypto=require("./helpers/crypto.js")
const checkAuth = require('./middleware/checkAuth.js')
const mongooseConnect=require("./helpers/mongooseConnect.js")

const valueSchema=new mongoose.Schema({},{
    toJSON:{
        transform(doc,ret){
            delete ret.__v
        }
    }
})
const ValueSchema=mongoose.model("Values",valueSchema)

// // Configuaration Mongoose connetction
// function connectMongoose(){
//     const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
//     const connectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
  
//     mongoose.connection.on("connecting", () => console.log("[DB]Mongoose connecting"));
//     mongoose.connection.on("connected", () => console.log("[DB]Mongoose connected"));
//     mongoose.connection.on("disconnecting", () =>console.log("[DB]Mongoose disconnecting"));
//     mongoose.connection.on("disconnected", () =>console.log("[DB]Mongoose disconnected"));
//     mongoose.connection.on("reconnected", () => console.log("[DB]Mongoose reconnected"));
//     mongoose.connection.on("error", (er) => console.log("[DB]Mongoose error", er));
  
//     mongoose.connect(connectionString);
// }

mongooseConnect.connectMongoose()

const app=express();
app.use(cors());
app.use(express.json());

// app.use("/user",userRouter);
// app.use("/key",keyRouter);
// app.use("/value",valueRouter);

//USER
app.post("/login", async (req,res)=>{
    console.log("REQUEST on /login")
    try {
        const user=await UserSchema.findOne({name:req.body.name})
        if(!user){res.status(401).send("user not found")}
        else{
            const loginSuccess = await crypto.compare(req.body.password, user.password)
            if(!loginSuccess){res.status(401).send("wrong password")}
            else{
                const token=jwt.sign({uid:user._id},process.env.SECRET,{expiresIn:"1d"})
                res.send(JSON.stringify({token:`Bearer ${token}`,user}))
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.post("/createUser", async (req,res)=>{
    console.log("REQUEST on /createUser",req.body);
    try {
        req.body.password= await crypto.hash(req.body.password)
        const result = await UserSchema.create(req.body)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.put("/updateUser", checkAuth.checkAuth, async (req,res)=>{
    console.log("UpdateUser",req.user._id);
    try {
        const result=await UserSchema.findByIdAndUpdate(req.user._id,req.body,{new:true})
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//KEYS
app.get("/requestKeys", checkAuth.checkAuth, async (req,res)=>{
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

app.post("/postKeys", checkAuth.checkAuth, async (req,res)=>{
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

app.put("/updateKey", checkAuth.checkAuth, async (req,res)=>{
    console.log("UpdateKey",req.body);
    try {
        const result=await KeySchema.findByIdAndUpdate(req.body._id,req.body,{new:true})
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.delete("/removeKey", checkAuth.checkAuth, async (req, res)=>{
    console.log("REQUEST on /removeKey")
    try {
        const result=await KeySchema.deleteOne(req.body)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

app.delete("/removeAllKeys", checkAuth.checkAuth, async (req, res)=>{
    console.log("REQUEST on /removeAllKeys")
    try {
        const result=await KeySchema.deleteMany()
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//VALUES

app.get("/getValues", checkAuth.checkAuth, async (req,res)=>{
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

app.post("/addValues", checkAuth.checkAuth, async (req,res)=>{
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

app.put("/updateValue", checkAuth.checkAuth, async (req,res)=>{
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

app.delete("/deleteValue", checkAuth.checkAuth, async (req,res)=>{
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

app.listen(process.env.PORT,()=>{
    console.log("Server up on ", process.env.PORT);
})