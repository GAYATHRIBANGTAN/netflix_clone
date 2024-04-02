const mongoose=require('mongoose')

const login=new mongoose.Schema({
   username:{
        type:String
    },
    password:{
        type:String
    }
})

const LoginDB=mongoose.model('test-collection',login) 
module.exports={LoginDB}