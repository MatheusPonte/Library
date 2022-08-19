const prisma = require('../database/prismaClient');

const getAllBooks = async () => {
    const books = await prisma.books.findMany();
    return books;
};

module.exports = {
    getAllBooks,
};