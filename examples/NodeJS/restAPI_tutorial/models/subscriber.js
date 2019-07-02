const mongoose = require('mongoose')

// Create the database schema
const subscriberSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	subscribedToChannel: {
		type: String,
		required: true
	},
	subscribeDate: {
		type: Date,
		required: true,
		default: Date.now
	}
})

module.exports = mongoose.model('Subscriber', subscriberSchema)