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

// CREATE
breads.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.hasGluten === 'on') {
        req.body.hasGlute = 'true'
    } else {
        req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.send(Bread)
})

// SHOW

breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    } else {
        res.render('404')
    }
})

module.exports = breads