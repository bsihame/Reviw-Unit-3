const express = require("express");
const app = express();
const cors = require("cors")
// app.use it uses the middleware it goes in the middle of request to get response(between request and response)
app.use(cors())
const port = 3000;
const people = {
  1: {name: "Sihame", id: 1}, 
  2: {name: "Corey", id: 2 },
  3: {name: "Jhenya", id: 3},
  4: {name: "Jon"}}
app.get("/", (req, res)=>{
  res.json({
    status: 200,
    message: ("your made a get request")
  })
});
app.get('/people', (req, res)=>{
  res.json(people)
  // go to postman and write http://localhost:3000/people to see you array
})
// get some id
app.get("/people/:id",(req, res)=>{
  //parameter = param is object and the value => go to the 
  //params coming from ul and you key init to gives the value : id call the key 
  console.log(req.params);
  //to get information with a specific id you should request
  // response with json people then key on the object on the request of params
   //at the key id
  res.json(people[req.params.id])
})
// post request we will received a lot of data in the body 
//=> go to postman type http://localhost:3000/ then switch from GET to POST request then send
app.post("/",(req, res)=>{
  res.send("you made a post request")
})
app.listen(port, ()=>{
  console.log("port is :", port)
})

