const express = require('express');
const colors = require('colors');
const dontenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMid')
const connectDB = require('./config/db')
const app = express();

const port = process.env.PORT || 5000

//Connect to database
connectDB();

// @desc Accepts body post
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.use('/api/appointment', require('./routes/appointRoute'))
app.use('/api/', require('./routes/ownerRoute'))


// @desc implement default error handling in express
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server port is running at port ${port}`)
})