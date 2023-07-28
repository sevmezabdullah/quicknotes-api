const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    note:{
        type:String,
        required:true
    },
    remindDate:{
        type:Date,
    },
    category:{
        type:String
    }
})



module.exports=mongoose.model('Note',noteSchema)