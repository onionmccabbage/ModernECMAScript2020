import React from 'react';
import './Results.css';

type WeatherData = { // declare types of incoming data
    city?:string
    country?:string
    description?: string
    temp?: number
    wind_direction?: string
    wind_speed?: string
}

type WeatherProp = { // declare type of incoming prop
    weather:WeatherData
}

// functional component - has no state of it's own (just immutable props from it's parent)
const Results = ({ weather }:WeatherProp):JSX.Element => {
    return (
        <aside className='weatherResults'>
            {/* dl is a definitionl list, with definition term (dt) and definition data (dd) */}
            <dl>
                <dt>Weather in {weather.city}, {weather.country} is {weather.description}</dt>
                <dd>{weather.temp}&deg;C with a {weather.wind_direction}&deg; wind blowing at {weather.wind_speed}m/s</dd>
            </dl>
        </aside>
    )
}

export default Results