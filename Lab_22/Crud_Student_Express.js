
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const students = [
    {
        stu_id:1039,
        stu_name:'krisha',
        email:'krisha@darshan.ac.in',
        age:18
    },
    {
        stu_id:1222,
        stu_name:'kunj',
        email:'kunj@darshan.ac.in',
        age:19
    },
    {
        stu_id:1241,
        stu_name:'diya',
        email:'diya@darshan.ac.in',
        age:32
    },
    {
        stu_id:1232,
        stu_name:'drashti',
        email:'drashti@darshan.ac.in',
        age:62
    },
    {
        stu_id:1220,
        stu_name:'yasha',
        email:'yasha@darshan.ac.in',
        age:92
    }
];

//getAllX
app.get('/students',(req,res)=>{
    res.send(students);
})

//getXByID
app.get('/students/:stu_id',(req,res)=>{
    const ans = students.find(stu=>stu.stu_id==req.params.stu_id);
    res.send(ans);
});

//Create
app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send("Student added");
});

app.patch('/students/:id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.stu_id==req.params.stu_id){
            return true;
        }
    });
    students[idToEdit] = req.body;
    res.send("student updated");
});

app.delete('/students/:stu_id',(req,res)=>{
    const idToEdit = students.findIndex((stu)=>{
        if(stu.stu_id==req.params.stu_id){
            return true;
        }
    });
    students.splice(idToEdit,1);
    res.send("Student deleted");
});

//Search
app.get('/students/search/:stu_name',(req,res) => {
    const a = students.filter((stu) => {
        if(stu.stu_name==stu.stu_name.indexOf(req.params.stu_name>-1)){
            return true;
        }
    });
    res.send(a);
});

//find by ID
app.get('/students/find/:stu_id',(req,res) => {
    const index = students.findIndex((stu) => {
        if(stu.stu_id==req.params.stu_id){
            return true;
        }
    });
    res.send(students[index]);
});


app.listen(3003,()=>{
    console.log("Server started at 3003");
})
