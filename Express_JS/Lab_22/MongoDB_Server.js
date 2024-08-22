const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoDB_Faculty = require('./MongoDB_Faculty');

const connectionString = "mongodb+srv://Krisha84:Krisha-Busa-84@cluster0.lvbhj.mongodb.net/";
mongoose.connect(connectionString).then(()=>{
    console.log("Connected with CloudDB !!");

    const app = express();
    app.use(bodyParser.urlencoded());
    
    app.get('/home',(req,res)=>{
        res.send("Welcome !!");
    });

    app.get('/faculties',async (req,res)=>{
        const ans = await MongoDB_Faculty.find();
        res.send(ans);
    })

    //GetAll
    app.get('/faculties',async (req,res)=>{
        const ans = await MongoDB_Faculty.find();
        res.send(ans);
    });

    //GetByID
    app.get('/faculties/:id',async (req,res)=>{
        const ans = await MongoDB_Faculty.findOne({id:req.params.FacultyID});
        res.send(ans);
    });

    //Create
    app.post('/faculties',async (req,res)=>{
        fac = new MongoDB_Faculty({...req.body});
        const ans = await fac.save();
        res.send(ans);
    });

    //Delete
    app.delete('/faculties/:id',async (req,res)=>{
        const ans = await MongoDB_Faculty.deleteOne({id:req.params.FacultyID});
        res.send(ans);
    });

    app.listen(3004,()=>{
        console.log("server started @ 3004 !!");
    });
});