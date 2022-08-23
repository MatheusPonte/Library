const booksRepository = require('../repository/BooksRepository');

class BooksServices {
    async listBooks() {
        const books = await booksRepository.getAllBooks();
        return books;
    }

    async createBooks(
        title: string,
        authors: string,
        description: string,
        isbn: string,
        publishing_company: string,
        languages: string,
        page_count: number,
    ) {
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