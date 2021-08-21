// set express and express-router
const express = require('express')
const router = express.Router()

// import restaurant model
const Restaurant = require('../../models/restaurant')

// set sort routes
router.get('/asc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// set reverse sort routes
router.get('/desc', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'desc' })
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// set sort routes by category
router.get('/category', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ category: 'asc' })
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// set sort routes by location
router.get('/location', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ location: 'asc' })
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// export router
module.exports = router