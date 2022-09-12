const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMid');
const connectDB = require('./config/db');
const app = express();

const port = process.env.PORT || 5000

//Connect to database
connectDB();

// @desc Accepts body post
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


// Appointment
app.use('/api/appointment', require('./routes/appointRoute'))
// Owners 
app.use('/api/', require('./routes/ownerRoute'))

// Admin
app.use('/admin/', require('./routes/adminRoute'))




// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}





// @desc implement default error handling in express
app.use(errorHandler)




app.listen(port, () => {
    console.log(`Server port is running at port ${port}`)
})