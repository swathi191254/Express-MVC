const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
    data:{type:String, required: true },
    instructor:{type:String, required: true},
    topic:{type:String, required: true},
    marks:{type:String, required: true},
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"student",
        required: true

    }

},
{ 
    versionKey:false,
    timestamps: true
})
module.exports = mongoose.model('evaluation',evaluationSchema)