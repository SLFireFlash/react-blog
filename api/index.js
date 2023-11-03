const express = require("express");
const cors = require('cors');
const {mongoose} = require("mongoose");
const User =require('./models/user');
const jwk =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const salt = bcrypt.genSaltSync(10);
const secTk ='hurasda129das4da4nsd123'
require('dotenv').config();




const app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.DBLink);

app.post('/register',async(req,res)=>{
    const {username,password} =req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);

    }

});

app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const userDoc =await User.findOne({username});
    if( userDoc != null){
        const passCheck = bcrypt.compareSync(password, userDoc.password);
        if(passCheck){
            jwk.sign({username,id:userDoc._id,},secTk,{},(err,token)=>{
                if(err)throw err;
                res.cookie('token',token).json({
                    id:userDoc._id,
                    username,
                });
            });
        }else{
            res.status(400).json("Wrong credentials");
        }
    }else{
        res.status(400).json("User Not Found");
    }
});

app.get('/profile',(req,res)=>{
    const{token}= req.cookies;
    jwk.verify(token,secTk,{},(err,info)=>{
        if(err)throw err;
        res.json(info);
    });
    res.json(req.cookies);

})
app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok');

})


app.listen(4000);



