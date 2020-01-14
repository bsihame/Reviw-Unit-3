// create our own server
const express  = require("express");
//make variable app we start express 
const app = express();
//declare a port
const port = 3000;
//app.listen takes a port and callback function
app.listen(port, () =>{
  console.log("Server is running on port", port)
})



