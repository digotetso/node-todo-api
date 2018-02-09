const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');


var {mongoose} = require('./db/mongose');
var {Todo} = require('./model/todos');
var {User} = require('./model/users');

var app = express();
var port = process.env.PORT || 3000

app.use(bodyParser.json())

//****************POST route**************************

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

//****************GET route**************************

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
//****************DELETE route**************************


app.delete('/todo/:id', (req, res) => {
    var id = req.params.id
    //dont put quotes ont the id

    if(!ObjectID.isValid){
        res.status(404).send()
        return console.log("Id not valid")
    }
    console.log(id)
    Todo.findByIdAndRemove(id).then((doc) => {

        if(!doc){
            return res.status(404).send()
        }

        console.log(doc)
        res.send(doc)

    }).catch((e) => res.send(e))
})

//******************PATCH route******************************

app.patch('/todo/:id', (req, res) => {

    //access paramaters from request
    var id = req.params.id;
    console.log('ID: ',id)
    //pull some properties from body
    //pick method takes array of property you wanna pull outta the body
    //body var will store updates

    var body = _.pick(req.body, ['text','completed']) //pick 'tetx','completed' from req.body
    if(!ObjectID.isValid){
        res.status(404).send()        
        return console.log('Invalid id')
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime()
        console.log('completed true')
    }else{
        body.completed = false;
        body.completedAt = null;
    }

Todo.findByIdAndUpdate(id, {$set:body}, {new: true}).then( (todo) => {
    if(!todo) {
        console.log('no todo')
        return res.status(404).send()
    }
    res.send(todo)
}).catch((err) => {
    console.log(err)
    res.send(err)
}
)
})

app.listen(port, () =>{
    console.log(`Server listening on page ${port}`)
})



