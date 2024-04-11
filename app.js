const express = require('express');

const app = new express();
const path = require('path');
const ejs = require('ejs');


app.set('view engine','ejs')
app.use(express.static("public"))


app.use("/about",(req,res)=>{
   //res.sendFile(path.resolve(__dirname,"page/about.html"));
   res.render('about')
});
app.use("/contact",(req,res)=>{
    //res.sendFile(path.resolve(__dirname,"page/contact.html"));
    res.render('contact')
});
app.use("/post",(req,res)=>{
    //res.sendFile(path.resolve(__dirname,"page/post.html"));
    res.render('post')
})
;
app.use("/",(req,res)=>{
    //res.sendFile(path.resolve(__dirname,"page/index.html"));
    res.render('index')
});
app.listen(3900, ()=> {
    console.log('App listening on port 3900')
})
