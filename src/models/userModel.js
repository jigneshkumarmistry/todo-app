import { Schema, model } from 'mongoose';

const userSchema = new Schema({
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      userType: Boolean  
});

const UserModel = model('User', userSchema);

export default UserModel;