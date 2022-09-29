import {Router} from 'express'
const route: Router = require('express')();
const UserController = require('../controllers/UsersControllers')
const auth = require('../middlewares/auth')

const userController = new UserController();


route.post('/createUser', userController.createUser);
route.get('/listAllUsers',userController.listAllUsers);
route.put('/updateUser/:id',auth, userController.updateUser);
route.delete('/deleteUser/:id',auth, userController.deleteUser);


module.exports = route;

