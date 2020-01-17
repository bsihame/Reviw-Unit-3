const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

const port = 3002;

const app = express();

let people = [];
// use middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

let peoples = [];

// app.get("/people", (req, res) =>{
//   console.log(req.url)
//   res.json(peoples)
// })
app.get("/cats/:color/:size", (req,res)=>{
  console.log(req.params)
  res.json({cat: req.params})
})

app.get("/dogs", (req,res) =>{
  console.log(req.query)
  // in the postman write http://localhost:3002/dogs?size = small// ==>{
   // "size ": " small"}
  res.json(req.query)
})
app.get("/people", (req,res)=>{
  res.json(people)
})
//post request on the body we should install npm i body-parser
app.post("/newUsers",(req, res)=>{
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () =>{
  console.log("Port is running on ", port)
})