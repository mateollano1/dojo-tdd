const express = require('express');
const app = express()
const codeBreaker = require('./codeBreaker');


app.get('/codebreaker', (req, res) => {

    res.json({
        result: codeBreaker.evaluar(req.query.value)
    })
})

module.exports = app