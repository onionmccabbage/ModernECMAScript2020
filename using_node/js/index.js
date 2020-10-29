// import some assets from other modules
import { cube, foo, output } from './utils.js'

// make use of the imported assets
output.options = {
    color:'blue',
    thickness:'3px'
}
output.draw() // this will call the draw method
console.log(output.options) // this has been updated
console.log(cube(3)) // 27
console.log(foo) // pi plus square root of 2