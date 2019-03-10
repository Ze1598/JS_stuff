var events = require('events');
// Create a new eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler
var eventHandler = function () {
	console.log("Event triggered");
}

// Create a new event which is handled by `eventHandler()`
eventEmitter.on("trigger!", eventHandler);

// Trigger the event manually
eventEmitter.emit("trigger!")