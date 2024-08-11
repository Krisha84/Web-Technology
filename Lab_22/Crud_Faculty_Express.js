const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const faculty = [
    {
        fac_id:1039,
        fac_name:'krisha',
        fac_email:'krisha@darshan.ac.in',
        fac_age:18
    },
    {
        fac_id:1222,
        fac_name:'kunj',
        fac_email:'kunj@darshan.ac.in',
        fac_age:19
    },
    {
        fac_id:1241,
        fac_name:'diya',
        fac_email:'diya@darshan.ac.in',
        fac_age:32
    },
    {
        fac_id:1232,
        fac_name:'drashti',
        fac_email:'drashti@darshan.ac.in',
        fac_age:62
    },
    {
        fac_id:1220,
        fac_name:'yasha',
        fac_email:'yasha@darshan.ac.in',
        fac_age:92
    }
];

//getAllX
app.get('/faculty',(req,res)=>{
    res.send(faculty);
})

//getXByID
app.get('/faculty/:fac_id',(req,res)=>{
    const ans = faculty.find(fac=>fac.fac_id==req.params.fac_id);
    res.send(ans);
});

//Create
app.post('/faculty',(req,res)=>{
    faculty.push(req.body);
    res.send("Faculty added..!!");
});

app.patch('/faculty/:fac_id',(req,res)=>{
    const idToEdit = fa.findIndex(fac=>fac.id==req.params.fac_id);
    faculty[idToEdit] = req.body;
    res.send("Faculty updated..!!");
});

app.delete('/faculty/:fac_id',(req,res)=>{
    const idToEdit = faculty.findIndex(fac=>fac.fac_id==req.params.fac_id);
    faculty.splice(idToEdit,1);
    res.send("Faculty deleted..!!");
});

//Search
app.get('/faculty/search/:fac_name',(req,res) => {
    const a = faculty.filter((fac) => {
        if(fac.fac_name==fac.fac_name.indexOf(req.params.fac_name>-1)){
            return true;
        }
    });
    res.send(a);
});

//find by ID
app.get('/faculty/find/:fac_id',(req,res) => {
    const index = faculty.findIndex((fac) => {
        if(fac.fac_id==req.params.fac_id){
            return true;
        }
    });
    res.send(faculty[index]);
});

app.listen(3008,()=>{
    console.log("Server started at 3008");
})