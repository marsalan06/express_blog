const express = require('express');
const router  = express.Router();
const path = require('path');
const blogs = require('../data/blogs')

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')

})

router.get('/blog',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/blogHome.html'))
    res.render('bloghome',{
        blogs: blogs
    }) //context added

})

router.get('/blogpost/:slug',(req,res)=>{
    myblog = blogs.filter((e)=>{
        if (e.slug == req.params.slug){
            return(e)
        }
    })
    console.log("=====test====")
    console.log(myblog)
    // res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
    res.render('blogpost',{
        title:myblog[0].title, //because its an array
        content:myblog[0].content,
    })
}
)

module.exports = router //export this to be used in index.js

