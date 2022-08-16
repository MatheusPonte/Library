import {Request,Response, Application, Router } from 'express'


const app: Application = require('express')();


app.get("/", (req:Request, res:Response)=>{
    res.send('funcionou');

});

app.get('/test', (req:Request, res:Response)=>{
    res.send('funcionou no / test');

});



module.exports = app;