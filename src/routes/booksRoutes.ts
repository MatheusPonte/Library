import { Router } from 'express'
const route: Router = require('express')();
const BooksController = require('../controllers/BooksControllers');

const booksController = new BooksController();

route.get('/getAllBooks', booksController.listBooks);

route.post('/createBook', booksController.createBooks);

route.put('/updateBook/:id', booksController.updateBooks);

route.delete('/deleteBook/:id', booksController.deleteBooks);

module.exports = route;
