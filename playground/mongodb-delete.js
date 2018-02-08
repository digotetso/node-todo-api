// const MongoClient = require('mongodb').MongoClient

//using obect distructuring, pull MongoClient & ObjectID property from mongodb
const {MongoClient, ObjectID} = require('mongodb')



//connecting to the db
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

var mycollection = db.collection('todos');
// use {name:'Digotetso'} to query

// mycollection.deleteOne({name:'Digotetso'})
//             .then( (res) => {
//                 console.log(res)
//             }, (err)=>{
//             console.log(err)
//             })

// mycollection.deleteMany({name:'Digotetso'})
// .then( (res) => {
//     console.log(res)
// }, (err)=>{
// console.log(err)
// })

mycollection.findOneAndDelete({name:'Matema'})
.then( (res) => {
    console.log(res)
}, (err)=>{
console.log(err)
})

db.close()

})