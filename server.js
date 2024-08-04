const express = require('express');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
require('dotenv').config();
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.end('You are in home page')
    console.log('You are in Home page')
})

app.get('/try', (req, res) => {
    res.end('You are in try page')
    console.log('You are in try page')
})

const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')
const customerRoutes = require('./routes/customerRoutes')

app.use('/hotelPersons',personRoutes)
app.use('/hotelMenu', menuRoutes)
app.use('/hotelCustomer', customerRoutes)

app.listen(PORT, () => {
    console.log('Server is running')
})
