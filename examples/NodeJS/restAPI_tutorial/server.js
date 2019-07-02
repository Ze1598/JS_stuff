// Will load the environment variables from the .env file
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// Create an Express app called `app`
const app = express()


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
	.then(res => console.log("Connected to database"))
	.catch(err => console.log(err))
/*
// Connect to the target database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
// Save the connection so we can alter it
const db = mongoose.connection
// What to do upon opening the connection
db.once('open', () => console.log("Connected to database"))
// Error handling
db.on('error', (error) => {
	console.warn('Error: ', error)
})
*/

// Make the server use JSON as its middleware
app.use(express.json())

// Define routes for the API
const subscribersRouter = require('./routes/subscribers')
// Whenever accessing the `/subscribers` path, use the\
// `subscribersRouter` route
app.use('/subscribers', subscribersRouter)


// Start the server on port 3000 and run a `console.log` upon start
app.listen(3000, () => console.log('Server started'));