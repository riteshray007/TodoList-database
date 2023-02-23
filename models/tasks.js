const { default:mongoose } = require('mongoose')
const db = require('mongoose');
 const taskSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    date : {
        type: String,
        
    },
    category : {
        type : String,
    }
 })

 const Task = mongoose.model('Task' , taskSchema );

 module.exports = Task;