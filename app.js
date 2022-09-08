const express = require('express');
const app     = express ();
const path    = require('path');
const port    = 3030;

app.use(express.static('public'));

app.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','home.html'));
});

app.get('/about', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','about.html'))
});

app.get('*', (req,res) => {
    return res.sendFile(path.join(__dirname,'views','notFound.html'))
});

app.listen(port, () => console.log (`Server running on port: http://localhost:${port}`));