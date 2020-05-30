const morgan = require('morgan')
const express = require('express');
const app = express()
const cors = require('cors')
const codeBreaker = require('./codeBreaker');
var bodyParser = require('body-parser')
    // const codeBreaker = require('./codeBreaker')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

// parse application/json
app.use(bodyParser.json())

app.get('/codebreaker', (req, res) => {

    res.json({
        result: codeBreaker.evaluar(req.query.value)
    })
})

app.post('/codebreaker', (req, res) => {

    res.json({ secret: codeBreaker.asignarCodigo(req.body.secret) })
})
module.exports = app