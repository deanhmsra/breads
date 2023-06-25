// Dependencies
const express = require('express')

// Configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Bread!')
})

// Breads routes

const breadsController = require('./controllers/breads_controllers')
app.use('/breads', breadsController)

// 404 page
app.get('*', (req, res) => {
    res.send('404')
})

// Listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})