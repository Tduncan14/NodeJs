const EventEmitter = require('events');
const uuid =require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter{

    log(msg){
        // call event
        this.emit('message',{id:uuid.v4(),msg});

    }
}


//module.exports = Logger;
const Logger =require('./logger');

const EventEmitter = require('events');

const logger = new Logger ();

logger.on('message', (data) =>{
    console.log(`called Listener` ,data);
})

logger.log('Hello World');
logger.log('world');
logger.log('treek')