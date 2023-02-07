const express = require('express');
const cors =require('cors');

const app = express();
app.use(cors);
app.use(express.json());

app.post('/signUp',(req,res)=>{
    const{username,password}=req.body;
    res.json({requestData:{username,password}});
});


app.listen(4000);
//mongodb+srv://Flash:<OWmjGDi8Kw4qTWtC>@cluster0.883qedm.mongodb.net/?retryWrites=true&w=majority
// OWmjGDi8Kw4qTWtC