import React from 'react'

import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import Hello from './hello'

// setup
let container = null // we need something to render our component into
beforeEach( ()=>{
    // set up a DOM element as a render target
    container = document.createElement('aside')
    document.body.appendChild(container)
} )

afterEach(() => {
    // tear down
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })

// our actual unit tests go here (this is a 'suite' of tests)
it('renders hello with or without a name prop', ()=>{
    act( ()=>{
        render(<Hello />, container) // with no prop
    } )
    expect(container.textContent).toBe('Greetings guest') // assertion

    act( ()=>{
        render(<Hello name='Jen' />, container) // with a prop
    } )
    expect(container.textContent).toBe('Hello Jen') // assertion
})

it('renders hello with or without a logged_in prop', ()=>{
    act( ()=>{
        render(<Hello />, container) // with no prop
    } )
    expect(container.textContent).toBe('Greetings guest') // assertion

    act( ()=>{
        render(<Hello logged_in='true' />, container) // with a prop
    } )
    expect(container.textContent).toBe('Hello User') // assertion
})