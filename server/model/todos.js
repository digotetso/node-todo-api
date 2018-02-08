const mongoose = require('mongoose')



//create a model
//define the attributes you want your Doc TO Hve

var Todo = mongoose.model('Todo', {
text: {  
    type:String,
    required: true,
    trim: true,
    minlength: 2
},
completed: {
    type: Boolean,
    default: true
}
    ,
completedAt: {
    type: Number,
    default: null
}
})


module.exports = {
    Todo
}

//make new doc with above defined attributes
//intance of todo model
