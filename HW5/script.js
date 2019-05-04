const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios');

app.get('/users',(req,res)=>{
    app.disable('x-powered-by');
    app.enable('case sensitive routing');
    app.enable('strict routing');
    app.enable('etag');
    let userData;
    axios.get('https://randomuser.me/api/?results=10').then(resp =>{
        userData=resp.data;
        res.setHeader('cache-control','private, max-age=86400');
        res.send(userData);
    });

});
app.listen(port,()=>console.log('listening'));