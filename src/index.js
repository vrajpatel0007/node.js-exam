const express = require("express")
var http = require("http")
const { connectDB } = require("./db/dbConnection");
const bodyParser = require("body-parser");
const routes = require("./routes/v1")
const config = require("./config/config")
const app = express()

app.use(bodyParser.json());



app.use("/v1", routes);

app.use((req,res, Next)=>{
  Next(new Error("rote not fonud"))
})
connectDB()

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log("server raning ...... port ="+ config.port);
});




