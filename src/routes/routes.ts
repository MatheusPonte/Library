import { Application } from "express";


const booksRoute = require('./booksRoutes.ts')
const express = require('express')
const app: Application = express();

app.use(express.json());
app.use('/books',booksRoute);


module.exports = app;