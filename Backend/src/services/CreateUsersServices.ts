import { getCustomRepository } from 'typeorm';
import { UsersRepositories} from '../repositories/UsersRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    admin?: boolean
};

class CreateUsersServices {
    
    async execute({name, email, password, admin = false} : IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error("Incorrect E-mail!")
        };

        const userAlreadyExists =  await usersRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error("E-mail already registered!")
        };

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUsersServices };