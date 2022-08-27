const prisma = require('../database/prismaClient');
const { v4: uuidv4 } = require('uuid')
const { hash } = require('bcrypt');


const findUserByEmail = async(email:string) =>{
    const user = await prisma.users.findUnique({
        where:{email,}
    });
    return user;
}

const listUsers = async()=>{
    const users = await prisma.users.findMany({
        select:{
            id: true,
            nome: true,
            email: true,

        }
    });
    return users;
};


const createUser = async (
    nome: string,
    email: string,
    password: string
) => {
    const incrypytedPassword = await hash(password, 8);
    const user = await prisma.users.create({
        data: {
            id: uuidv4(),
            nome,
            email,
            password: incrypytedPassword,
        }
    });
    return user;

};
module.exports = { createUser, listUsers, findUserByEmail }


export { };