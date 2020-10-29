import React from 'react'

// this is a simple functional component
const Hello = (props: any) => { // we should create a type for props
    if (props.name) {
        return <h4>Hello {props.name}</h4>
    }
    if (props.logged_in) {
        return <h4>Hello User</h4>
    } 
    else {
        return <h4>Greetings guest</h4>
    }
}

export default Hello