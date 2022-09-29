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

    async updateUser(req: Request, res: Response){
        const {id} = req.params;
        let {nome, email, password} = req.body;
        nome = nome || '';
        email = email|| '';
        password = password || '';

        try {
            const user = await usersServices.updateUser( id, nome, email, password);
            return res.status(200).json(user);
        } catch (err) {
            console.log(err)
            return res.status(500).json({message: err })
            
        }
    };

    async deleteUser(req: Request, res: Response){
        const {id} = req.params;
        try {
            const user = await usersServices.deleteUser(id);
            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json({message: err });
        }
    };

}

module.exports = UserController;