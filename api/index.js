const express = require("express");
const cors = require('cors');
const {mongoose} = require("mongoose");
const User =require('./models/user');
const jwk =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const secTk ='hurasda129das4da4nsd123'



const app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());

mongoose.connect('mongodb+srv://LahiruPrasanna:OasrH7J70Xj3rqLL@cluster0.rlxpino.mongodb.net/?retryWrites=true&w=majority');

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
                res.cookie('token',token).json('ok');
            });
        }else{
            res.status(400).json("Wrong credentials");
        }
    }else{
        res.status(400).json("User Not Found");
    }

   
});

app.listen(4000);



