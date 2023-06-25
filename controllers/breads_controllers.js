const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

// INDEX /breads/

breads.get('/', (req, res) => {
    res.render('index', 
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    //res.send(Bread)
})

// SHOW

breads.get('/:arrayIndex', (req, res) => {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
    })
})

module.exports = breads