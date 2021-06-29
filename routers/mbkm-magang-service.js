const { response } = require('express');
var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8087'
const api = apiAdapter(BASE_URL)

router.all('/magang*', (req, res) => {
    let params
    const headers = { headers: req.headers }
    const paths = req.path.replace("/magang/", "/")
    if (req.method.toLowerCase() == "get") {
        params = [paths, headers]
    } else {
        params = [paths, req.body, headers]
    }

    api[req.method.toLowerCase()](...params).then(resp => {
        res.status(resp.status).send(resp.data)
    }).catch(e => {
        console.log(e)
        res.status(e.response.status).send(e.response.data)
    })
})

module.exports = router