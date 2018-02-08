
var newTodo = new Todo({
    text: 'Mongoose is cooool',
    completed: false,
    completedAt: new Date().getFullYear()
})

var myTodo = new Todo({
    text: 'Dee is great',
    completed: false,
    completedAt: new Date().getFullYear()
})

//save todo

newTodo.save().then ( (doc) => {
console.log(JSON.stringify(doc) )
}, (e) => {
    console.log('Could not save Todo', e)
})

myTodo.save().then ( (doc) => {
    console.log(JSON.stringify(doc) )
    }, (e) => {
        console.log('Could not save Todo', e)
    })