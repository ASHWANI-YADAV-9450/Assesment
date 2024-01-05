const mongoose = require("mongoose");


const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please provide first name"]
    },
    lastName:{
        type:String,
        required:[true,"Please provide last name"]
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please provide an email address"],
        validate: {
          validator: function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
          },
          message: "Please provide a valid email address",
        },
      },
      password:{
        type:String,
        required: [true, "Please Enter Your Password"],
    // minLength: [8, "Password should be 8 or greater than 8 characters"],
    
    }

})

const user= mongoose.model("User",userSchema);
module.exports=user