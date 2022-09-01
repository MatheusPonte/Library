import { Router } from 'express'
const route: Router = require('express')();
const BooksController = require('../controllers/BooksControllers');
const auth = require('../middlewares/auth')

const booksController = new BooksController();

route.get('/getAllBooks', booksController.listBooks);

route.get('/ getBookById/:id', booksController.listBookById)

route.post('/createBook', auth, booksController.createBooks);

route.put('/updateBook/:id',auth, booksController.updateBooks);

route.delete('/deleteBook/:id',auth, booksController.deleteBooks);

module.exports = route;
