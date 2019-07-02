const express = require('express')
// Create a route using `Router()`
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Get all subscribers
router.get('/', async (req, res) => {
	try {
		const subscribers = await Subscriber.find()
		res.json(subscribers)
	} catch (err) {
		res.status(500).json({message: err.message})
	}
})

// Get one subscriber
// Needs to be passed an `id` argument in the endpoint
router.get('/:id', getSubscriber, (req, res) => {
	res.json(res.subscriber)
})

// Create one subscriber
router.post('/', async (req, res) => {
	const subscriber = new Subscriber({
		name: req.body.name,
		subscribedToChannel: req.body.subscribedToChannel
	})
	try {
		const newSubscriber = await subscriber.save()
		res.status(201).json(newSubscriber)
	} catch (err) {
		res.status(400).json({message: err.message})
	}
})

// Update one subscriber
// Note: `patch()` updates only one piece of information unlike `put()` that\
// updates the entire information for a subscriber
router.patch('/:id', getSubscriber, async (req, res) => {
	if (req.body.name != null) {
		res.subscriber.name = req.body.name
	}
	if (req.body.subscribedToChannel != null) {
		res.subscriber.subscribedToChannel = req.body.subscribedToChannel
	}
	try {
		const updatedSubscriber = await res.subscriber.save()
		res.json(updatedSubscriber)
	} catch (err) {
		res.status(400).json({message: err.message})
	}
})

// Delete one subscriber
// Needs to be passed an `id` argument in the endpoint
router.delete('/:id', getSubscriber, async (req, res) => {
	try {
		await res.subscriber.remove()
		res.json({message: 'Deleted subscriber'})
	} catch (err) {
		res.status(500).json({message: err.message})
	}
})

// Function to act as middleware for retrieving a sinlge subscriber by id.\
// Since this is common to three of the endpoints, it's better to use a\
// single middleware for the opperation instead of repeating code
async function getSubscriber(req, res, next) {
	let subscriber;
	try {
		subscriber = await Subscriber.findById(req.params.id)
		if (subscriber == null) {
			return res.status(404).json({message: 'Cannot find subscriber'})
		}
	} catch (err) {
		return res.status(500).json({message: err.message})
	}

	res.subscriber = subscriber
	next()
}

// Export the module
module.exports = router