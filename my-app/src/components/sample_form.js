// this is an example of a Class-based component
// it has life-cycle events
// it has its OWN props and state

import React, { Component } from 'react'

class SampleForm extends Component {

    // we should decalre the initial state of this component
    state = { count: 0, label: 'initial' }

    // event handler methods
    onChange = (event)=>{
        // decide what to do if the form field value changes
        let amount = Number(event.target.value)
        // this.setState( (state)=>{return {count:amount} } )
        this.setState( state=> ({count:amount}) ) // shorthand for a function
    }

    render() { // ALL React classes MUST have a render method
        return (
            <aside>
                <h3>This is the Class-Based Form Component</h3>
                <p>Count is {this.state.count} label is {this.state.label}</p>
                {/* form fields may be 'uncontrolled' or 'controlled' */}
                <input onChange={this.onChange} type='number' placeholder='count' />
            </aside>
        )
    }

}

export default SampleForm