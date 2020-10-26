// when page loads, see if there' anything in localStorage
// global variables
let who = document.getElementById('who')
let who_image = document.getElementById('who_image')
let persist = document.getElementById('persist')
let gallery = document.getElementById('gallery')

let img_src = ''

window.onload = () => {
    let fbID = localStorage.getItem('fbID') // careful - what will this be the first time it loads?
    who.value = fbID
}
const getFBImage = () => {
    // prevent default if using a form
    let fbID = who.value
    img_src = `https://graph.facebook.com/${fbID}/picture?type=normal`
    console.log(fbID, img_src)
    who_image.setAttribute('src', img_src) // or just who_image.src =
    // persist in localStorage
    localStorage.setItem('fbID', fbID)
}

const persistImage = ()=>{
    // add the image as a persistent member of the DOM
    let new_image = document.createElement('img')
    new_image.setAttribute('src', img_src)
    gallery.appendChild(new_image)
}

who.addEventListener('keyup', getFBImage)
persist.addEventListener('click', persistImage)
