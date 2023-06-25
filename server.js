const express = require('express')

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', function(req, res) {
    res.send('Welcome to an Awesome App about Bread!')
})

// Breads routes

const breadController = require('./controllers/breads_controllers')
app.use('/breads', breadController)

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`)
})