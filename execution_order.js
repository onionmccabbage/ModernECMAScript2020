// comparing the order of ECMAScript statements being executed
// we can time how long this takes
console.time('my-timer')

// setTimeout when called, executes immediately
setTimeout( ()=>{console.log('setTimeout')}, 0 ) // 0 should mean right now

// setImmediate runs on the next cycle of the run loop
setImmediate( ()=>{console.log('setImmediate')} ) // should mean right now

// process.nextTick() will always interrupt ANYTHING else and run first
process.nextTick( ()=>{console.log('process.nextTick')} ) // this one wins!!
console.timeEnd('my-timer')