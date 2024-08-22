
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

const products = [
    {
        id:1039,
        pro_name:'product1',
        price:1000
    },
    {
        id:1222,
        pro_name:'product2',
        price:2000
    },
    {
        id:1241,
        pro_name:'product3',
        price:3000
    },
    {
        id:1232,
        pro_name:'product4',
        price:4000
    },
    {
        id:1220,
        pro_name:'product5',
        price:5000
    }
];

//getAllX
app.get('/products',(req,res)=>{
    res.send(products);
})

//getXByID
app.get('/products/:id',(req,res)=>{
    const ans = products.find(pro=>pro.id==req.params.id);
    res.send(ans);
});

//Create
app.post('/products',(req,res)=>{
    products.push(req.body);
    res.send("Student added");
});

app.patch('/products/:id',(req,res)=>{
    const idToEdit = products.findIndex((pro)=>{
        if(pro.id==req.params.id){
            return true;
        }
    });
    products[idToEdit] = req.body;
    res.send("student updated");
});

app.delete('/products/:id',(req,res)=>{
    const idToEdit = products.findIndex((pro)=>{
        if(pro.id==req.params.id){
            return true;
        }
    });
    products.splice(idToEdit,1);
    res.send("Student deleted");
});

//Search
app.get('/products/search/:pro_name',(req,res) => {
    const a = products.filter((pro) => {
        if(pro.pro_name==pro.pro_name.indexOf(req.params.pro_name>-1)){
            return true;
        }
    });
    res.send(a);
});

//find by ID
app.get('/products/find/:id',(req,res) => {
    const index = products.findIndex((pro) => {
        if(pro.id==req.params.id){
            return true;
        }
    });
    res.send(products[index]);
});


app.listen(3003,()=>{
    console.log("Server started at 3003");
})
