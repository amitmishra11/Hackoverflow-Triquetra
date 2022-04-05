const express = require('express');
const route = express.Router()

// const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('index');
})

route.get('/login', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('login');
})

route.get('/signup', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('signup');
})

route.get('/blog', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('blog');
})

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route