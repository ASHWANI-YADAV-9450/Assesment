const mongoose = require("mongoose");


  const connectDatabase= async()=>{
    try{
       await mongoose.connect("mongodb://localhost:27017/speer_Assesment")

      // await mongoose.connect("mongodb+srv://Ashwani:asdfghjkl@cluster0.gy8npqa.mongodb.net/ratelimiting?authSource=admin&replicaSet=atlas-g9c3ws-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true")


        console.log("Databases Connected");
    }catch(error){
        console.log("error: ", error.message);
    }
}



module.exports= connectDatabase;