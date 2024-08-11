const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello_World !!');
});

app.listen(3004,() => {
    console.log('Server running at 3004..!!');
});
