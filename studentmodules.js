const mongoose=require('mongoose');

const studentschem=mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
    },
        lastName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            unique: true,  //email should be unique for every user
            required:true
        },
        department:{
            type:String,
            required:true
        }

        },{
        timeStamp:true
    });

const Student = mongoose.model('Student',studentschem);
module.exports=Student;