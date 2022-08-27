import { Application } from "express";


const cors =require('cors')
const booksRoute = require('./booksRoutes.ts')
const usersRoute = require('./usersRoutes.ts')
const loginRoute = require('./loginRoutes.ts')
const express = require('express')
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/books',booksRoute);
app.use('/users',usersRoute);
app.use('/login',loginRoute)


module.exports = app;