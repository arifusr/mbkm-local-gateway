var express = require('express');
var router = express.Router()
var userService = require('./mbkm-user-service')
var coreService = require('./mbkm-core-service')
var mitraService = require('./mbkm-mitra-service')

router.use(userService)
router.use(coreService)
router.use(mitraService)

module.exports = router