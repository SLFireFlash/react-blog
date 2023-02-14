const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwk = require("jsonwebtoken");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const user = require('./models/user');

dotenv.config();
const app = express();

app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser())
const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl);

const Pkey ="test1"

console.log("app start")
app.post("/signUpDb", async(req,res) =>{
    const{username,password}=req.body;
    try{
        const userDoc = await user.create({username,password:bcrypt.hashSync(password,10)})
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);

    }
})
app.post("/loginDb",async(req,res)=>{
    const{username,password}=req.body;
    const userDoc = await user.findOne({username})
    if(userDoc.password != null){
        const passSt = bcrypt.compareSync(password,userDoc.password);
        if(passSt == true){
            //login
            jwk.sign({username,id:userDoc._id},Pkey,{},(err,token)=>{
                if(err)throw err;
                res.cookie('token',token).json("login complete");
            });
        }
        else{
            console.log("something went wrong try again")
            
        }
    }
    else{
        console.log("user name not found")
        
    }


})
// // app.get("/proC",(res,req) =>{
// //     res.json("req.cookie")

// });


app.listen(4000);