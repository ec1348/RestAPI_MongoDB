const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res)=>{
    res.send("This is home!!");
})




//connect to db

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true}).then(console.log('connect to db'));

//Listening the server 
app.listen(3000);