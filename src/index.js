const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const apiRoutes = require('./routes/index');
const {User,Role}=require('./models/index');

const db=require('./models/index')
const setupAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(3001,async ()=>{
        console.log("Server started at 3001");
        // await db.sequelize.sync({alter:true})               // for syncing the db after changes.
        // console.log('All models were synchronized successfully.');
        const u1=await User.findByPk(2);
        const r1=await Role.findByPk(3);
    })
}

setupAndStartServer();