const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb')


var {mongoose} = require('./db/mongose');
var {Todo} = require('./model/todos');
var {User} = require('./model/users');

var app = express();

app.use(bodyParser.json())
//get request

app.post('/todo', (req, res) => {
    
    var todo = new Todo({
    text: req.body.text,
    name: 'ddeee'
})


var user = new User( {
    email: req.body.email
})
//save data to db
todo.save().then( () => {
    res.send(req.body)
} , (err) => {
    console.log('Unable to save the user',err)
    res.status(404).send(err.errors.text.message)
})
user.save().then((user) => {
    res.send(user)
}, (err) => {
    console.log('Cannot save the user')
    res.send(err)
})

console.log(req.body)


})

//get request

app.get('/todo', (req, res) => {
//fetch data from db
    Todo.find().then((todos) => {
        res.send({todos})
    }, (err) =>{
        res.status(400)
        console.log('Cant find todo')
    })

})

app.get('/todo/:id', (req, res) => {
    // Todo.findOne({
    //     text:req.params.username
    // }).then( (todo) => {
    //     if(!todo) {
    //         console.log('Todo not found')
    //     }
    //     res.send(todo)
    //     console.log(req.params)
        
    // }, (e) => console.log(e))

    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        res.status(404).send()
        return console.log("Id not valid")
    }
  Todo.findOne({
        _id:id
    }).then( (todo) => {
        if(!todo) {
            console.log('Todo not found')
        }
        res.send(todo)
        console.log(req.params)
        
    }).catch( (e) => res.status(400).send())

    
    
})



app.listen(3000, () =>{
    console.log('Server listening on page 3000')
}
)



