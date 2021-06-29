var express = require('express');
var router = express.Router()
var userService = require('./mbkm-user-service')
var coreService = require('./mbkm-core-service')
var mitraService = require('./mbkm-mitra-service')
var stateService = require('./mbkm-state-service')
var studiService = require('./mbkm-studi-service')
var magangService = require('./mbkm-magang-service')

router.use(userService)
router.use(coreService)
router.use(mitraService)
router.use(stateService)
router.use(studiService)
router.use(magangService)

module.exports = router