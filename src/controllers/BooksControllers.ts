const BooksService = require('../services/BookServices');
import { Request, Response } from 'express';

const booksService = new BooksService();

class BooksController {
    async listBooks(req: Request, res: Response) {
        const {page} = req.query;
        try {
            const books = await booksService.listBooks(page);
            return res.status(200).send(books);
        } catch (err) {
            console.log(err)
            return res.status(500).send({ error: err })
        }
    }

    async listBookById(req:Request, res:Response){
        const {id} = req.params;
        try{
            const book = await booksService.listBookById(id);
            return res.status(200).send(book);
        }catch(err){
            return res.status(500).send({error: err})
        }
    }

    async createBooks(req: Request, res: Response) {
        const {
            title,
            authors,
            description,
            isbn,
            publishing_company,
            languages,
            page_count,
        } = req.body;

        try {
            const books = await booksService.createBooks(
                title,
                authors,
                description,
                isbn,
                publishing_company,
                languages,
                page_count,
            );
            return res.status(200).send(books);

        } catch (err) {
            console.log(err)
            return res.status(500).send({ error: err })

        }
    }
    async updateBooks(req: Request, res: Response) {
        const { id } = req.params;
        const {
            title,
            authors,
            description,
            isbn,
            publishing_company,
            languages,
            page_count,

        } = req.body;
        try {
            const books = await booksService.updateBooks(
                id,
                title,
                authors,
                description,
                isbn,
                publishing_company,
                languages,
                page_count,
            );

            return res.status(200).send(books);
        } catch (err) {
            console.log(err)
            return res.status(500).send({ error: err })

        }
    }

    async deleteBooks(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const books = await booksService.deleteBooks(id)
            return res.status(200).send(books);

        } catch (err) {
            return res.status(500).send({ error: err })

        }
    }


}

module.exports = BooksController;