
const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const port = 8000;

const app = express();

const db = require('./config/mongoose')
const Task = require('./models/tasks')
// var selected_list =  require('./assets/js/home')

// import selected_list  from './assets/js/home';

app.use(express.static('assets'));
app.use( bodyParser.urlencoded( {extended : false}) )
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))

// var tasksarr = []
app.get('/' , (req , res)=>{

    Task.find({} , function(err , taskarr){
        if(err){
            console.log('error');
            return ;
        }
        return res.render('home' , {
            tasks : taskarr 
        });
    } )
})

app.get('/delete-task' , function(req , res){
    console.log(selected_list);
    return res.redirect('back')
} )

app.post('/create-task' , (req , res)=>{
    console.log(req.body)
    Task.create({
        description : req.body.description,
        category : req.body.category,
        date : req.body.date 
    })
    // let task = {};
    // task.description = req.body.description;
    // task.category = req.body.category;
    // task.date = req.body.date;
    // tasksarr.push(task);
    return res.redirect('back');
})

app.listen(port , (err)=>{
    if(err){
        console.log(err);
    }
    console.log('server is up');
})