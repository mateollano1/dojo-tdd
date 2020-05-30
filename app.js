const express = require('express');
const app = express()
const codeBreaker = require('./codeBreaker');
var bodyParser = require('body-parser')
    // const codeBreaker = require('./codeBreaker')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/codebreaker', (req, res) => {

    res.json({
        result: codeBreaker.evaluar(req.query.value)
    })
})

app.post('/codebreaker', (req, res) => {

    res.json({ ex: codeBreaker.asignarCodigo(req.body.secret) })
})
module.exports = app