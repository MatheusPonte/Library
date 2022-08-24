import { Application } from "express";


const cors =require('cors')
const booksRoute = require('./booksRoutes.ts')
const express = require('express')
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/books',booksRoute);


module.exports = app;