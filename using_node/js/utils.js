// some useful utility scripts
const cube = (x=2)=>{
    // return the cube of x
    return x*x*x
}

const foo = Math.PI + Math.SQRT2 // this might come in handy
const infinity = Number.POSITIVE_INFINITY
const epsilon  = Number.EPSILON

let output = {
    options:{
        color:'white',
        thickness:'2px'
    },
    draw: ()=>{
        console.log(`this would draw an output`)
    }
}
// we can export anything that may be of use to other modules
export { cube, foo, infinity, epsilon, output } // none of them arethe default
