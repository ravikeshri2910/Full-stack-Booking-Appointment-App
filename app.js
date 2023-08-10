const path = require('path');
const sequelize = require('./util/database')

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const bookingRoute = require('./route/bookingApp')

const BookingData = require('./models/bookingData')

const app = express();
app.use(cors())

app.use(bodyParser.json({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.post('/user/add-user', bookingApp.add)
// app.use(bookingRoute) // for booking

// app.use(bookingRoute ) // for geeting

app.use(bookingRoute) //for deleting


sequelize
    .sync()
    .then(result => {
        // console.log(result);

        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });