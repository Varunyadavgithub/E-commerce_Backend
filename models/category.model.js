const mongoose = require("mongoose");
/*
name, 
description
*/

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    }
},{timestamps:true,versionKey:false})

module.exports=mongoose.model("Category", categorySchema);