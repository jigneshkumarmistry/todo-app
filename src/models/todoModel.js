import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
    userId: Schema.Types.ObjectId,
    title: Schema.Types.String,
    isActive: Schema.Types.Boolean,
});

const TodoModel = model("Todo", todoSchema);

export default TodoModel;