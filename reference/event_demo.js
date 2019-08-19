const EventEmitter = require('events');
// create class
class MyEmitter extends EventEmitter {}

// Intit object

const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event

myEmitter.emit('event');