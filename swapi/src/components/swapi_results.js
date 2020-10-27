import React, {Component} from 'react'
export default class SwapiResults extends Component {
    render() {
        let body = null;
        switch (this.props.category) {
            case 'films':
                body = (
                    // an HTML table
                    <tbody> 
                        <tr><td>Category</td><td>{this.props.category}</td></tr>
                        <tr><td>Title</td><td>{this.props.result.title}</td></tr>
                        <tr><td>Opening</td><td>{this.props.result.opening_crawl}</td></tr>
                    </tbody>
                )
                break;
            case 'people':
                body = (
                    <tbody>
                        <tr><td>Category</td><td>{this.props.category}</td></tr>
                        <tr><td>Name</td><td>{this.props.result.name}</td></tr>
                        <tr><td>Eye Colour</td><td>{this.props.result.eye_color}</td></tr>
                    </tbody>
                )
                break;
            case 'planets':
                body = (
                    <tbody>
                        <tr><td>Category</td><td>{this.props.category}</td></tr>
                        <tr><td>Name</td><td>{this.props.result.name}</td></tr>
                        <tr><td>Population</td><td>{this.props.result.population}</td></tr>
                    </tbody>
                )
                break;
            case 'species':
                body = (
                    <tbody>
                        <tr><td>Category</td><td>{this.props.category}</td></tr>
                        <tr><td>Name</td><td>{this.props.result.name}</td></tr>
                        <tr><td>Language</td><td>{this.props.result.language}</td></tr>
                    </tbody>
                )
                break;
            default:
                body = (
                    <tbody>
                        <tr><td>Category</td><td>{this.props.category}</td></tr>
                        <tr><td>Name</td><td>{this.props.result.name}</td></tr>
                    </tbody>
                )
                break;
        }
        return (
            <section>
                <h1>Results for {this.props.category} number {this.props.id}</h1>
                <table>
                    {body}
                </table>
            </section>
        )
    }
}