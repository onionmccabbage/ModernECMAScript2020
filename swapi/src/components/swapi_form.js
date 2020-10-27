    import React, {Component} from 'react'
import SwapiResults from './swapi_results'

export default class SwapiForm extends Component {
    constructor(props) { // optional constructor - a good place to set immutable props
        super(props)
        this.state = {id: '1', // we can set up mutable stateful values here
                      categories: [],
                      selected: 'people',
                      result: {},
                      errMsg:''
                    }
        let url = `https://swapi.dev/api/`
        console.log("Fetching from " + url)
        // here we make an initial call to swapi, which will return the available categories
        fetch(url)
            .then((response) => { return response.json() })
            .then((json) => {
                console.log(json)
                this.setState({categories: Object.keys(json)}) // we now have a collection of categories
            })
            .catch( (err)=>{ // always a good idea to handle errors
                console.log('Error:', err)
                this.setState({errMsg:err})
            } )
    }
    // NB this 'arrow-function' syntax is required so the event bindings work as expected
    handleSubmit=(e)=>{
        // we must prevent the form from actually submitting
        e.preventDefault() // stop the form from submitting!!
        // make a fetch to the swapi end point
        let url = `https://swapi.dev/api/${this.state.selected}/${this.state.id}`
        console.log("Fetching from " + url)
        fetch(url)
            .then((response) => { return response.json() })
            .then((json) => {
                console.log(json)
                this.setState({result: json}) // any returned data is now available in the state of this component
            })
    }
    handleChange=(e)=>{ // controlled numeric field for 'id'
        this.setState({id: e.target.value})
    }
    handleSelect=(e)=>{ // controlled select field for selected category
        this.setState({selected: e.target.value})
    }

    render() {
        let options = ( // these are the options which will be used in hte select field (categories)
            this.state.categories.map( (category, i) =>
                <option key={i}>{category}</option>
            )
        )
        let message
        if(this.state.errMsg){
            // message = <p>There was an error: {this.state.errMsg}</p>
            message = <p>There was an error</p>
        }
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.active} onChange={this.handleSelect}>
                        {options}
                    </select>
                    <input placeholder='Enter id' 
                        type='number'
                        min='1' max='6'
                        value={this.state.id} 
                        onChange={this.handleChange} />
                    {/* in React, we MUST be explicit about 'submit' button */}
                    <button type='submit'>Go</button>
                </form>
                {/* if there is an error we will see it here */}
                <pre>{message}</pre>
                <hr/>
                {/* here we instantiate a 'results' component, passing in the id and category */}
                <SwapiResults category={this.state.selected} id={this.state.id} result={this.state.result} />
            </aside>
        )
    }

}
