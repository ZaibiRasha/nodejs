const EventEmitter = require('events');
const myEmitter = new EventEmitter();

/* setImmediate call wil execute the listner
   after the rest of the code */ 
setImmediate(()=>{
myEmitter.emit('TEST_EVENT');
})

/* on : to subsucribe to the event */
myEmitter.on( 'TEST_EVENT' , ()=>{
  console.log( 'TEST_EVENT was fired')
});
myEmitter.on( 'TEST_EVENT' , ()=>{
  console.log( 'TEST_EVENT was fired')
});
myEmitter.on( 'TEST_EVENT' , ()=>{
  console.log( 'TEST_EVENT was fired')
});

/* emit : to listen to the event */
// myEmitter.emit('TEST_EVENT');

// Streams are Event Emitters
// process.stdin, process.stdout
