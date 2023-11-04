require('dotenv').config();
const express = require("express");
const cors = require('cors');
const {mongoose} = require("mongoose");
const User =require('./models/user');
const Post = require('./models/post');
const jwk =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const salt = bcrypt.genSaltSync(10);
const secTk ='hurasda129das4da4nsd123'
const multer = require('multer');
const fs = require ('fs');


const uploadMid=multer({dest:'uploads/'});

const app = express();
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static(__dirname+'/uploads'));
mongoose.connect(process.env.MONGODB_URI);

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

function setupFilePath(req){
    const {originalname,path} =req.file;
    const parts = originalname.split('.')
    const exnt = parts[parts.length-1];
    const newPath= path+'.'+exnt;
    fs.renameSync(path,newPath)
    return newPath;
}
app.post('/newpost',uploadMid.single('file'),async(req,res)=>{
    const newpath = setupFilePath(req)
    const{title,summary,content}=req.body;

    const{token}= req.cookies;
    jwk.verify(token,secTk,{},async(err,info)=>{
        if(err)throw err;
        const PostDoc = await Post.create({
            title,
            summary,
            content,
            cover:newpath,
            author:info.id
        })
        res.json(PostDoc);
    });
});

app.put('/post',uploadMid.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwk.verify(token, secTk, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(postDoc);
    });
  
  });

app.get('/post',async(req,res)=>{
    res.json(
        await Post.find()
          .populate('author', ['username'])
          .sort({createdAt: -1})
          .limit(20)
      );
})

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
  })
app.listen(process.env.PORT);



