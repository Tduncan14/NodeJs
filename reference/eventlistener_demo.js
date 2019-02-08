const eventEmitter = require('events');


//Creat class

class MyEmitter extends eventEmitter {}

// Init object

const myEmitter = new MyEmitter();

//Event Listener

myEmitter.on('event', () => console.log('Event fire'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');