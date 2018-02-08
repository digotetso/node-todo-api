
const mongoose = require('mongoose')


var User = mongoose.model('User' , {
    email: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = {
    User
}