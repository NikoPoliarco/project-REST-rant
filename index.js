// DEPENDENCIES
require('dotenv').config()
const methodOverride = require('method-override')
const express = require('express')
const app = express()

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// Assets
app.use(express.static("public"))
// Controllers
app.use("/places", require("./controllers/places"))
// Home
app.get('/', (req, res) => {
    res.render('Home')
})
// Error 404
app.get('*', (req, res) => {
    res.render('Error404')
})


// Listen for connections
app.listen(process.env.PORT)
