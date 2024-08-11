const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'WebPage.html'),(err,data) => {
        if(err){
            throw err;
        }
    });
    // res.sendFile('WebApp...!!');
}); 

app.get('/Home', (req, res) => {
    res.sendFile(path.join(__dirname,'Home.html'),(err,data) => {
        if(err){
            throw err;
        }
    });
    //res.send('Welcome to Home_Page !!');
});

app.get('/About', (req, res) => {
    res.sendFile(path.join(__dirname,'About.html'),(err,data) => {
        if(err){
            throw err;
        }
    });
    // res.send('About our web_page !!');
});

app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname,'Contact.html'),(err,data) => {
        if(err){
            throw err;
        }
    });
    // res.send('Contact us for ny doubt !!');
});

app.get('/Services', (req, res) => {
    res.sendFile(path.join(__dirname,'Services.html'),(err,data) => {
        if(err){
            throw err;
        }
    });
    // res.send('Services');
});

app.get('/FAQ', (req, res) => {
    res.sendFile(path.join(__dirname,'FAQ.html'),(err,data) => {
        if(err){
            throw err;
        }
    });
    // res.send('For any Query !!');
});

app.listen(3004,() => {
    console.log('Server running at 3004..!!');
});