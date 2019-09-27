const EventEmitter = require('events')

class Emitter extends EventEmitter {}

emitter = new Emitter

emitter.once('knock', function () {     // This executes the Observer only once.
    console.log('Who\'s there?')
})

emitter.emit('knock')
emitter.emit('knock')