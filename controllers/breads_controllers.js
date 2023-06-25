const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

// INDEX /breads/

breads.get('/', (req, res) => {
    res.send(Bread)
})

// SHOW

breads.get('/:arrayIndex', (req, res) => {
    const index = req.params.arrayIndex
    res.send(Bread[index])
})

module.exports = breads