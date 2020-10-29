// we wil use esm in order to also use import
// node -r esm index.js
import { Observable } from 'rxjs'

// we can create our own instance of an Observable
const ob = new Observable((observer) => {
    setTimeout(() => {
        observer.next('hello from an observable')
    }, 1000) // milliseconds
})

// elsehwere we would subscribe to our observable
// NB good news - the Observable is only create when first used, and destroyed on last use
// in between it remains a singleton - i.e. performant

ob.subscribe((nextValue) => {
    console.log(`subscriber A receives ${nextValue}`)
 })

 ob.subscribe((nextValue) => {
    console.log(`subscriber B receives ${nextValue}`)
 })
 ob.subscribe((nextValue) => {
    console.log(`subscriber C receives ${nextValue}`)
 })