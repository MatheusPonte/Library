const usersRepository = require('../repository/UsersRepository');
const { compare } = require('bcrypt')
const {sign} = require('jsonwebtoken')

class LoginServes {

    async signin(email: string, password: string) {
        const user = await usersRepository.findUserByEmail(email);

        if (!user) throw new Error('user not found');

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) throw new Error('Incorret PassWord');

        let token = null;
        try {
            token = sign({
                id:user.id,
                nome:user.nome,
                email:user.email,
             }, process.env.JWT_SECRET,{expireIn: '1d'} );
        } catch (err) {
            throw new Error('error ao gerar token')
            
        }
        return token;
    }
};

module.exports = LoginServes;


export { };