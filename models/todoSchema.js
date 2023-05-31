const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const todoSchema=mongoose.Schema({
    Description:{
        type:String,
        require:true,
    },
},
    {
        timestamps: true,
    }
);

module.exports=mongoose.model("todoModel",todoSchema);






