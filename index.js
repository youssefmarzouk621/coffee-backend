const express = require('express')
const morgan = require('morgan');

const connectDB = require('./dB/connection.js')

const app = express();
app.use(morgan('tiny'));


app.use(express.json({ extended: false }));

app.use('/uploads', express.static(__dirname + '/public'));

app.use('/api/users',require('./Controllers/usersController'))
app.use('/api/categories',require('./Controllers/categoryController'))
app.use('/api/coffees',require('./Controllers/coffeeController'))

connectDB();



app.listen(process.env.PORT || 5000)
console.log("server started on port 5000")