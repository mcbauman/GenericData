const mongoose = require("mongoose")

const valueSchema=new mongoose.Schema(
//     {   
//     index:{type:Number}
// },
// {
//     toJSON:{
//         transform(doc,ret){
//             delete ret._id
//             delete ret.__v
//         }
//     }
// }
)

const ValueSchema=mongoose.model("Values",valueSchema)

module.exports = ValueSchema;