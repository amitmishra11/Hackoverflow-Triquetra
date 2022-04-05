const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

// const services = require('../services/render');
// const controller = require('../controller/controller');

const connectDB=require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8000

// log requests
app.use(morgan('tiny'));

// mongodb is going to be connecgtd
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
// IF WE ARE USING EJS,THEN NO NEED TO SPECIFY FOLDER NAME 
// AS WE HAVE EVERYTHING IN VIEWS FOLDER
// IF NOT IN VIEWS THEN SPECIFY PATH OF FOLDER
// EXAMPLE:
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// SUPPOSE WE HAVE TO ACCESS STYLE.CSS IN THIS CSS FOLDER
// EG:
// just write    css/style.css
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// app.get('/', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('index');
// })
// app.get('/add-user', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('add_user');
// })
// app.get('/update-user', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('update_user');
// })

// loading routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});