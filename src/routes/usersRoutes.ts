import {Router} from 'express'
const route: Router = require('express')();
const UserController = require('../controllers/UsersControllers')

const userController = new UserController();


route.post('/createUser', userController.createUser);
route.get('/listAllUsers',userController.listAllUsers);


module.exports = route;

