// set packages used in the project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// set methodOverride
const methodOverride = require('method-override')

// set service port
const port = 3000

//import routes
const routes = require('./routes')

// import mongoose config
require('./config/mongoose')

// set body-parser
app.use(express.urlencoded({ extended: true }))

// use methodOverride
app.use(methodOverride('_method'))

// use routes
app.use(routes)

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set static file
app.use(express.static('public'))

// start and listen on the Express server
app.listen(port, () => {
  console.log(`server running https://localhost:${port}`)
})