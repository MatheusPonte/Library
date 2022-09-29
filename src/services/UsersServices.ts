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

    async updateUser(id: string, nome?: string, email?: string, password?:string){
        const user = await usersRepository.updateUser(id, nome, email, password);
        return user;
    }

    async deleteUser(id:string){
        const user = await usersRepository.deleteUser(id);
        return user;
    }
};



module.exports = UserService;