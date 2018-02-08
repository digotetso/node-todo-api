const {mongoose} = require('./../server/db/mongose');
const {Todo} = require('./../server/model/todos')
const {User} = require('./../server/model/users')

const {ObjectID} = require('mongodb')


var id = '#a7afd7a3bbe96d21a7ef6d8';
var userId = '5a7b1229592bb2ea1f517f8a';
//to check if object id is valid
if(!ObjectID.isValid(id)){
    console.log("Id not valid")
}



//return array of docs
Todo.find({
    _id: id
}).then((todos) => {
    if(!todos){
        return console.log('Todo not found')
    }
    console.log(todos)
}, (e) => console.log(e))

//return a single doc, recommended when finding any single doc

Todo.findOne({
    _id: id
}).then((todo) => {
    if(!todo){
        return console.log('Todo not found')
    }
    console.log(todo)
},(e) => console.log(e))

//return a single doc, recommended when finding  single doc by Id

Todo.findById({
    _id: id
}).then((todos) => {
    if(!todos){
        return console.log('Todo not found')
    }
    console.log(todos)
},(e) => console.log(e))


//***************************************User**** */

User.findById(userId).then((user) => {
    if(!user) {
        console.log('User was not found')
    }
    console.log(user)
}, (e) => console.log(e))


