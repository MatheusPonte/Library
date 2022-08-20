const booksRepository = require('../repository/BooksRepository');

class BooksServices{
    async listBooks(){
       const books = await booksRepository.getAllBooks();
       return books; 
    }

async createBooks(
    title: string,
    authors: string,
    description: string,
    isbn:string,
    publishing_company:string,
   languages:string,
   page_count:number,
){
    const books = await booksRepository.createBook(
        title,
    authors,
    description,
    isbn,
    publishing_company,
   languages,
   page_count,
    );
    return books;
   
}
}

module.exports = BooksServices;