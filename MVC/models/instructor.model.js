const mongoose = require('mongoose');

const instructorSchema =  new mongoose.Schema({
    topic:{type:String, required: true},
    instructor_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},

{ versionKey:false,timestamps:true,}
)
module.exports = mongoose.model('user',userSchema)