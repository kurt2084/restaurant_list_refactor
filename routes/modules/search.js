// set express and express-router
const express = require('express')
const router = express.Router()

// import restaurant model
const Restaurant = require('../../models/restaurant')

// set searching restaurant
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const keywordRegex = new RegExp(keyword, 'i')
  return Restaurant.find({ $or: [{ name: { $regex: keywordRegex } }, { category: { $regex: keywordRegex } }] })
    .lean()
    .then(restaurant => res.render('index', { restaurant, keyword }))
    .catch(error => console.log(error))
})

// export router
module.exports = router