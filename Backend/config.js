const mongoose = require('mongoose');
require('dotenv').config();

// Define the DBConnection function inside an IIFE
const DBConnection = async () => {
   try {
     await mongoose.connect(process.env.DATABASE_URL);
     console.log("DB Connect Successfully");
   } catch(err) {
     console.error("Error Occurred While Connecting To DB:", err);
   }
}

// Immediately invoke the function to make it asynchronous


// Export the DBConnection function
module.exports = DBConnection;
