const {v4:uuidv4} = require('uuid');


const prisma = require('../database/prismaClient');

const getAllBooks = async () => {
    const books = await prisma.books.findMany();
    return books;
};

const createBook = async (title: string, authors: string,description: string,isbn:string,publishing_company:string,
    languages:string,page_count:number) =>{
    const books = await prisma.books.create({
        data:{
            id:uuidv4(),
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

module.exports = {
    getAllBooks,
    createBook,
};