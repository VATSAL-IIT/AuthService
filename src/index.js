const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const apiRoutes = require('./routes/index');

const setupAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiRoutes);
    app.listen(3001,()=>{
        console.log("Server started at 3001");
        
    })
}

setupAndStartServer();