const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// Routers
const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)


//Mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/closet', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))



app.listen(5000)