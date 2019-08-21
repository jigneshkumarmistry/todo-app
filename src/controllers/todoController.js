import { TodoModel } from '../models';

// For creating new todos
function create(data, userId) {
    return TodoModel.create({ ...data, userId });
}

// For get todos with mulitple user role and single and list 
function get(id, user) {
    console.log(user);
    if (id) {
        //For id specific
        return TodoModel.findById(id);
    } else if (user.isAdmin === false) {
        //For normal user
       let userId = user._id;
        return TodoModel.find({ userId });
    } else {
        // For Admin 
        return TodoModel.find();
    }
}

// For update todos
function update(id, data) {
    return TodoModel.findByIdAndUpdate({ _id:id }, data, { new : true } );
}

// For delete todos
function remove(id) {
    return TodoModel.findByIdAndDelete(id);
}

export {
    create,
    get,
    update,
    remove
}