const express = require('express');
const app=express();

const setupAndStartServer=()=>{
    app.listen(3001,()=>{
        console.log("Server started at 3001");

    })
}

setupAndStartServer();