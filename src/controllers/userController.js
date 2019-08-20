import bcrypt from 'bcrypt';

import { UserModel } from '../models';

function create(data) {
    return UserModel.create(data);
}

export {
    create
}