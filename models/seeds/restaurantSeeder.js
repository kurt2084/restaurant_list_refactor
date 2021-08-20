// import mongoose
const mongoose = require('mongoose')

// import restaurant.json
const restaurantList = require('../../restaurant.json').results

// import Restaurant model
const Restaurant = require('../restaurant')

// set mongoose
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

// set mongodb connection
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  // add seeder
  for (let restaurant of restaurantList) {
    Restaurant.create({
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description,
    })
  }
  console.log('done!')
})