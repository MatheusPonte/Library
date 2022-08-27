const UserService = require('../services/UsersServices');
import { Request, Response } from 'express';

const usersServices = new UserService();

class UserController{


async listAllUsers(req:Request, res: Response){
    try{
        const users = await usersServices.listAllUsers();
        return  res.status(200).json(users);
    } catch(err){
        return res.status(500).send({ error: err })
    }
}

    async createUser(req: Request, res: Response){
        const{
            nome,
            email,
            password,
        } = req.body;
        try{
            const users = await usersServices.createUser(
                nome,
                email,
                password,
            );
            return res.status(200).send(users);
        }catch(err){
            console.log(err)
            return res.status(500).send({ error: err })

        }
    }
}

module.exports = UserController;