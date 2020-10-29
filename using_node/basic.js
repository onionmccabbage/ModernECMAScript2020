// import the operating system info
const os = require('os') // this is similar to import
// import the setup config (with desctructuring)
const { version, port, copyright  } = require('./config/setup.json')
require('./config/util') // the whole util module is now available
console.log(`Running on port ${port} version ${version} ${copyright}`)

// pick appart the os
console.log( os.cpus() )
console.log( os.cpus().length )
console.log( os.userInfo() )

// expect some incoming arguments
const showArgs = (...rest)=>{
    for(let i=0; i<rest.length; i++){
        console.log(rest[i])
    }
}

// immediate code
showArgs(process.argv) // argv are any run-time arguments for this process
console.log(module) // see info about this module