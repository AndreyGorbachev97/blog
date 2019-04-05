//const mongoose = require('mongoose');
const express = require('express')
const path = require('path')
const mongoose =require('mongoose')
const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')
const keys = require('./keys')
const postRouter = require('./routes/post')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use('/api/post', postRouter)
app.use(express.static(clientPath));

mongoose.connect(keys.mongoURI)
.then( () => console.log('mongo db connected'))
.catch( err => console.log(err))

app.listen(port, () => {
    console.log('We are live on ' + port);
  });
