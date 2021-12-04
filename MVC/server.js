const  express = require('express');

const app = express();

const connect = require('./config/db');
const userController = require("./controllers/user.controller")
const studentController = require("./controllers/students.controller");
const evaluationController = require("./controllers/evalution.controller");
app.use(express.json());

app.use("/users",userController);


const start = async()=>{
    await connect();

    app.listen(1912,()=>{
        console.log("listening on port 1912")
    })
}
start()