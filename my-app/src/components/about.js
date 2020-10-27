// import stuff we need
import React from 'react'

// declare a functional component
const About = ( {title, products} )=>{ // we an choose to pass in props, here called 'title'
    // set up any properties
    // NB in React props are IMMUTABLE
    // use State for mutable values


    // .. and any methods
    // the ONE thing we MUST have is a return statement
    return (
        <section>
            <h4>This is the About screen</h4>
            <p>it is a functional component</p>
            <p>{title}</p>
            <ul>
                {/* this is a JSX comment */}
                {/* we can iterate over our products data model */}
                {products.map( (el)=>{
                    return (<li key={el.id}>{el.name} &pound;{el.price}</li>)
                } )}
                {/* or */}
                {/* {products.map( el=> (<li key={el.id}>{el.name} &pound;{el.price}</li>) ) } */}
            </ul>
        </section>
    )
}

// make this component available by exporting it
export default About