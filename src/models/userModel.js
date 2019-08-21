import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
      firstName: Schema.Types.String,
      lastName: Schema.Types.String,
      email: Schema.Types.String,
      password: Schema.Types.String,
      isAdmin: Schema.Types.Boolean  
});

//For auto convert normal password to hased password through bcrypt

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next;
    } else {
        const hashedPassword = await bcrypt.hash(this.password, 10)
        this.password = hashedPassword;
        next();
    }
}, (error) => {
    next(error);
});

const UserModel = model('User', userSchema);

export default UserModel;