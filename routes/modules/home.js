// set express and express-router
const express = require('express')
const router = express.Router()

//set restaurant model
const Restaurant = require('../../models/restaurant')

// set home route
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// export router
module.exports = router