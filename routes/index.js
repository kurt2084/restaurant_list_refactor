// set express and express-router
const express = require('express')
const router = express.Router()

// set router
const home = require('./modules/home')
const restaurant = require('./modules/restaurant')
const search = require('./modules/search')
const sort = require('./modules/sort')

// import routes
router.use('/', home)
router.use('/restaurants', restaurant)
router.use('/search', search)
router.use('/sort', sort)

// export router
module.exports = router