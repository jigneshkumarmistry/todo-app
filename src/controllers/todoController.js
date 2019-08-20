import { TodoModel } from '../models';

function create(data, userId) {
    return TodoModel.create({ ...data, userId });
}

function getAll() {
    return TodoModel.find();
}

export {
    create,
    getAll
}