const { response } = require('express');
var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8081'
const api = apiAdapter(BASE_URL)

router.all('/mbkm*', (req, res) => {
    api[req.method.toLowerCase()](req.path.replace('/mbkm',''), req.body, {headers: req.headers}).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(e => {
        console.log(e)
        res.status(e.response.status).send(e.response.data)
    })
})

module.exports = router