const { v4: uuidv4 } = require('uuid');


const prisma = require('../database/prismaClient');

const getAllBooks = async () => {
    const books = await prisma.books.findMany();
    return books;
};

const createBook = async (title: string, authors: string, description: string, isbn: string, publishing_company: string,
    languages: string, page_count: number) => {
    const books = await prisma.books.create({
        data: {
            id: uuidv4(),
            title,
            authors,
            description,
            isbn,
            publishing_company,
            languages,
            page_count,

        }
    });
    return books;
}

const updateBook = async (
    id: string,
    title?: string,
    authors?: string,
    description?: string,
    isbn?: string,
    publishing_company?: string,
    languages?: string,
    page_count?: number
) => {
    const oldBook = await prisma.books.findUnique({
        where: { id },
    });

    const result = await prisma.books.update({
        where: { id },
        data: {
            title: title ? title : oldBook.title,
            authors: authors ? authors : oldBook.authors,
            description: description ? description : oldBook.description,
            isbn: isbn ? isbn : oldBook.isbn,
            publishing_company: publishing_company ? publishing_company : oldBook.publishing_company,
            languages: languages ? languages : oldBook.languages,
            page_count: page_count ? page_count : oldBook.page_count
        }
    });
    return result;
};

const deleteBook = async (id: string) => {
    const result = await prisma.books.delete({
        where: { id },

    })
    return result;
}

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook

};