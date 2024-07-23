const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post("/login" , (req , res) =>{
    const {email , password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record")
        }
    })
})

app.post("/register" , (req , res) =>{
    const {email} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user =>{
        if(user){
            res.json("User with this email already exists");
        }
        else{
            EmployeeModel.create(req.body)
            .then(employees => res.json(employees))
            .catch(err => req.json(err))
                }
    })
})

app.listen(3001 , () =>{
    console.log("server is running")
})