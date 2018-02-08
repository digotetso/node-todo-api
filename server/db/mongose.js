const mongoose = require('mongoose')

//tell mongooose to use global promise
mongoose.Promise = global.Promise ;
///connect to the server
mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports = {
    mongoose
}





