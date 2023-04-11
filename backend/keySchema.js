const mongoose = require("mongoose")

const keySchema=new mongoose.Schema({
    name:{type:String, required:true, unique:true },
    type:{type:String, enum:["String","Number","Date","Boolean","Array","Object"],required:true},
    minRange:Number,
    maxRange:Number,
    arrayOption:[],
    // arrayOptions:{type:[],required:function(){return this.type=="Array"}}
    objectEntries:{}
    // objectEntries:{type:{},required:function(){return this.type=="Object"}}
},
{
    toJSON:{
        transform(doc,ret){
            delete ret._id
            delete ret.__v
        }
    }
})

const KeySchema=mongoose.model("FieldDefinition",keySchema)

module.exports = KeySchema;