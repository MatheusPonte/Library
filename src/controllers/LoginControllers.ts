const LoginServices = require('../services/loginServices');
import { Request, Response } from 'express';

const loginServices = new LoginServices();

class LoginController{
    async signin(req:Request, res:Response){
        const {email, password} = req.body;
        try {
            const user = await loginServices.signin(email,password)
            return res.status(200).json(user)
        } catch (err) {
            console.log(err)
            return res.status(401).send({ error: err })
            
        }
    }
};

module.exports = LoginController;