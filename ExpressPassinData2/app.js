const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 3003;

const app = express();

let people = [];

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


app.get("/people", (req, res) =>{
  res.json(people)
})

app.listen(port, () =>{
  console.log("port is running on", port)
})