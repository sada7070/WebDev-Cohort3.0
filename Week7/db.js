// Initialize the schema of your app in a new file (db.js).
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

// structure of the data i want to put in database.
const User = new Schema({
    email: {type: String, unique: true},
    password: String,
    name: String
})

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: ObjectId
})

// 'users/todos' is the name of the collection(/database) i want to put in the data of schema type(User/Todo).
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

// exporting the above models so that we can import it in index.js file.
module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}