import {Router} from 'express'
const route: Router = require('express')();
const BooksController = require('../controllers/BooksControllers');

const booksController = new BooksController();

route.get('/getAllBooks', booksController.listBooks);

module.exports = route;
