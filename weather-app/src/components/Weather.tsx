import React, { Component } from 'react';
import './Weather.css';
import Results from './Results'

interface IResult { // this must match the incoming result data
    weather:Array<any>
    main: object
    country: string
    description?: string
    temp?: number
    wind_direction?: string
    wind_speed?: string
}

interface IState { // convention I-nnnn
    city: string
    country: string
    description?: string
    temp?: number
    wind_direction?: string
    wind_speed?: string
    result?:IResult // we could just grab all the data in one go!
}

export default class Weather extends Component {

    // data members and their types
    state: IState

    constructor(props: any) {
        super(props)
        this.state = { city: 'london', country: 'uk' }
    }

    fetchData = ():void => {
        // make a fetch call to an API end point
        let APIKey = '4e8da6e9040e437ae6dd1cfc888f170c'
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&APPID=${APIKey}`
        fetch(url)
            .then((response) => { return response.json() })
            .then((result) => {
                console.log(result)
                this.setState({ result:result })
                // pick the data members off the returned JSON and populateteh state
                this.setState({
                    description    : result.weather[0].description,
                    temp           : result.main.temp,
                    wind_direction : result.wind.deg,
                    wind_speed     : result.wind.speed
                })
            })
    }

    componentDidMount():void {
        this.fetchData()
    }

    handleSubmit = (e: any):void => {
        // we must prevent the form from actually submitting
        e.preventDefault()
        this.fetchData()
    }

    handleCityChange = (e: any):void => { // probably need MouseEvent
        this.setState({ city: e.target.value })
    }

    handleCountryChange = (e: any):void => { // we ALWAYS use :void if there is no return statement
        this.setState({ country: e.target.value })
        // in the absence of an explicit return statement
        // all JavaScript function have an implicit return
        // which returns nothing at all, i.e. void
    }

    render():JSX.Element {
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Enter city'
                        type='text'
                        value={this.state.city}
                        onChange={this.handleCityChange} />
                    <input placeholder='Enter country'
                        type='text'
                        value={this.state.country}
                        onChange={this.handleCountryChange} />
                    <hr />
                    <input type='submit' value='go' />
                </form>
                <hr/>
                <Results weather={ // begin binding
                        { // construct a single object to pass in as a prop
                            city:this.state.city, 
                            country:this.state.country, 
                            description:this.state.description, 
                            temp:this.state.temp, 
                            wind_speed:this.state.wind_speed, 
                            wind_direction:this.state.wind_direction 
                        }
                    } /> 
 
            </aside>
        )
    }
}