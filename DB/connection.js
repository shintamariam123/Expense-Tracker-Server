const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
      console.log("Mongodb Atlas connected with etServer");
    }
).catch(err=>{
  console.log("Connection Failed!!!");
  console.log(err);
})