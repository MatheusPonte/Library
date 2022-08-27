const booksRepository = require('../repository/BooksRepository');

class BooksServices {
    async listBooks(page:number) {
        const books = await booksRepository.getAllBooks(page);
        return books;
    }

    async listBookById(id: string){
        const book = await booksRepository.getBookById(id);
        return book;
    };

    async createBooks(
        title: string,
        authors: string,
        description: string,
        isbn: string,
        publishing_company: string,
        languages: string,
        page_count: number,
        posted_by: string,
    ) {
        const books = await booksRepository.createBook(
            title,
            authors,
            description,
            isbn,
            publishing_company,
            languages,
            page_count,
            posted_by,
        );
        return books;

    }

    async updateBooks(id: string,
        title?: string,
        authors?: string,
        description?: string,
        isbn?: string,
        publishing_company?: string,
        languages?: string,
        page_count?: number
    ) {
        const books = await booksRepository.updateBook(
            id,
            title,
            authors,
            description,
            isbn,
            publishing_company,
            languages,
            page_count,
        )
        return books;

    }

    async deleteBooks(id: string) {
        const books = await booksRepository.deleteBook(id)
        return books;
    }
}

module.exports = BooksServices;