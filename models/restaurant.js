// import mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// set Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  name_en: {
    type: String,
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
  google_map: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    require: true
  },
  description: {
    type: String,
  },
})

// export Schema
module.exports = mongoose.model('Restaurant', restaurantSchema)