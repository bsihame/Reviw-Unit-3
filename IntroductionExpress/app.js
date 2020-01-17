// create our own server
const express  = require("express");
//make variable app we start express 
const app = express();
const cors = require("cors")
//declare a port
const port = 3000;
//const people = [{name: "Sihame"},{name: "Faysal"}, {name: "Hakim"}]
app.use(cors())
//get request
      //get request: getting data
      //post request:post request submitting 
      //put request: updating all data
      //patch updating specific data
      //delete deleting data
const people = {
  1: {name: "Corey", id: 1},
  2: {name: "Jhenya", id: 2}, 
  3: {name: "Jon", id: 3}
}

const ClassMate = {
  1: {name: "Corey", id: 1},
   2: {name: "Jhenya", id: 2}, 
   3: {name: "Jon", id: 3}
  }

app.get("/",(req, res) =>{
   res.json("You made a get request at /url")
 })

 app.get("/people", (req, res) =>{
   console.log(people);
   res.json(people)
 })

 app.get("/people/:id", (req,res)=>{
   res.json(people[req.params.id])
 })
 
 app.get("/ClassMate", (request, response)=>{
   response.json(ClassMate)
  })
  app.get("/ClassMate/:id", (request, response) =>{
    response.json(ClassMate[request.params.id])
  })
  
  //app.listen takes a port and callback function
  app.listen(port, () =>{
    console.log("Server is running on port", port)
  })





