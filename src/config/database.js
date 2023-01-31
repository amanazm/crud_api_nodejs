const mongoose = require('mongoose');
require('dotenv').config()

const {MONGO_URI} = process.env;

exports.connect = () =>{
  mongoose
    .connect(MONGO_URI,{
      useNewURLParser:true,
      useUnifiedTopology: true,
    })
    .then(()=>{
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed');
      console.error(error);
      process.exit(1);
    })
}