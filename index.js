const express = require('express'); // import express
const path = require('path'); //import path
const app = express() //use express to create app
const port = 3000 //define port
const exphbs = require('express-handlebars'); //require express-handlebarss

app.use(express.static(path.join(__dirname,"static"))) //get the static folder

app.engine('handlebars',exphbs.engine()); //define the handlebar engine
app.set('view engine','handlebars'); //set it as view engine

// app.get('/hello/:name',(req,res)=>{
//     res.send('Hello World!'+req.params.name)
// }) //create view taking a query param 'name'


// app.get('/',(req,res)=>{
//     res.sendFile()
// }) //create view to serve html file

// app.get('/about',(req,res)=>{
//     res.json({"harry":30})

// }) //json response returned

app.use('/',require(path.join(__dirname,'routes/blog.js'))) //use the blog.js file in routes

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})