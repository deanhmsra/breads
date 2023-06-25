const express = require('express')

const breads = express.Router()

const Bread = require('../modules/bread')

// INDEX /breads/

breads.get('/', function(req, res) {
    res.send('This is the index at /breads/')
})

// SHOW

breads.get('/', function(req, res){
    const index = req.params.arrayIndex
    res.send(Bread[index])
})

module.exports = breads