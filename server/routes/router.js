const express = require('express');
const route = express.Router()

const { ensureAuth, ensureGuest } = require('../middleware/auth');

// const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', ensureGuest, (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('index');
})

route.get('/index2', ensureAuth, (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('index2', {
        name: req.user.displayName
    });
})

route.get('/login', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('login');
})

route.get('/signup', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('signup');
})

route.get('/blog', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('blog');
})

route.get('/maps', ensureAuth, (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('maps');
})

route.get('/medc', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('medc');
})
route.get('/symptom', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('symptom');
})

// route.get('/logout', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('index');
// })

// API
// route.post('/api/users', controller.create);

// route.get('/api/users', controller.find);
// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);

module.exports = route