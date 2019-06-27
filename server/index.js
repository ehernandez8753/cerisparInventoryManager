const express = require("express");
const app = express();
const invController = require("./controllers/invController.js");

require("dotenv").config({path: __dirname + "/../.env"});
const {SERVER_PORT} = process.env;

app.use(express.json());
app.listen(SERVER_PORT, ()  => {console.log("Server Live")});

//API Endpoints
app.get("/api/cerispar", invController.getAllItems);
app.post("/api/cerispar", invController.addNewItem);
app.put("/api/cerispar/:id", invController.editItem);
app.delete("/api/cerispar/:id", invController.deleteItem);