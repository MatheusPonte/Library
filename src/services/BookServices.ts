const booksRepository = require('../repository/BooksRepository');

class BooksServices{
    async listBooks(){
       const books = await booksRepository.getAllBooks();
       return books; 
    }
}

module.exports = BooksServices;