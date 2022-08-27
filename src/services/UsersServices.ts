const usersRepository = require('../repository/UsersRepository')

class UserService {


    async listAllUsers(){
        const users = await usersRepository.listUsers();
        return users;
    }


    async createUser(
        nome: string,
        email: string,
        password: string,

    ) {
        const users = await usersRepository.createUser(
            nome,
            email,
            password);
        return users;
    }
};

module.exports = UserService;