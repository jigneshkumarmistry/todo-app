import bcrypt from 'bcrypt';
import { UserModel } from '../models';

function create(data) {
    return UserModel.create(data);
}

async function getByEmail(email, password){
    const user = await UserModel.findOne({
        email:email
    });

    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            return user;
        }

        throw new Error('Invalid email or password');
    }

    throw new Error('User not found in the database');
}

export {
    create,
    getByEmail
}