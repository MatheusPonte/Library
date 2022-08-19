import { Application } from "express";
const booksRoute = require('./booksRoutes.ts')


const app: Application = require('express')();

app.use('/books',booksRoute);


module.exports = app;