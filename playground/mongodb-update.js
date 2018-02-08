// const MongoClient = require('mongodb').MongoClient

//using obect distructuring, pull MongoClient & ObjectID property from mongodb
const {MongoClient, ObjectID} = require('mongodb')



//connecting to the db
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

var mycollection = db.collection('todos');


mycollection.update({
    //filter by id
    _id: new ObjectID('5a7894f3b9a0986d124aebb4')
},{
    //operators, check "node mongodb native" http://mongodb.github.io/node-mongodb-native/3.0/api/
   $inc: {age: 10},

    $set : {name: 'genius'}
    
},
//options
{
    returnOriginal: false // dto get new doc back,not the og
}
)

//db.close()

})