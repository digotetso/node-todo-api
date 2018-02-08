// const MongoClient = require('mongodb').MongoClient

//using obect distructuring, pull MongoClient & ObjectID property from mongodb
const {MongoClient, ObjectID} = require('mongodb')



//connecting to the db
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

var mycollection = db.collection('todos');
// use {name:'Digotetso'} to query

                    mycollection.find({name:'Digotetso'})
                        //.toArray()
                        .count()
                        .then( (count) => {
                            console.log(JSON.stringify(count, undefined, 2))
                        }, (err) => {
                            console.log('Unable to find the doc')
                        })
    mycollection.find({name: 'Digotetso'})
                .toArray()
                .then( (res) => {
                    console.log(JSON.stringify(res, undefined, 2))
                }, (err) => {
                    console.log('Unable to fetch doc')
                })


// if(err) {
//     return console.log('Unable to connect ot db')
// }

// console.log('Connected to db')
// //insert document to todos collection
// db.collection('todos').insertOne(
//     {
//         name: 'Digotetso',
//         age: 29
//     }
// , (err, res) => {
//     //handle success case

//     if(err) {
//         return console.log('Unable to add document')
//     }

//     console.log(JSON.stringify(res.ops, undefined, 2))
// })

// db.collection('profile')
// //insert document to profile collection
// .insertOne({
//     name: 'Doe',
//     surname: 'John',
//     country: 'usa',
//     Id: '7835357935839',
//     age: 33
// }, 
// //this callback will be called for scuccess and failure case
// (err, res) => {
//  //handle error   
// if(err) {
//     return console.log('Unable to add document to collection')    
// }
// //handle success case
// console.log(JSON.stringify(res.ops, undefined, 2))
// }
// )
db.close()

})