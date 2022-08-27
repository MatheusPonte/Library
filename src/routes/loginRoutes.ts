import {Router} from 'express'
const route: Router = require('express')();
const LoginController = require('../controllers/LoginControllers')

const loginControllers = new LoginController();

route.post('/signin', loginControllers.signin);


module.exports = route;