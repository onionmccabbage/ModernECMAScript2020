import React, { Component } from 'react'; // this is object destructuring
import './App.css';

// typescript generics let us specify data types for collections (arrays, objects and classes)
let tv:Array<object> = [ {name:'Show', time:30}, {name:'News', time:10}, {name:'Game', time:60}]
// we should aim to avoid using 'any' as a type but needs must...
let bucket:Array<any> = [1, false, {}, tv, []]
// using rest and spread
const r = (a:number, b:number, ...rest:any)=>{
  console.log(a, b, ...rest)
}
// call our function
r(1, 2, 4,5,6,[true,false], 'hello')

// we can declare classes and interfaces to be used as data types
interface User { // an inteface never takes actual values - it is abtract
  username:string
  age:number
  agree_flag:boolean
  optionaParam?:number //the ? says this is not absolutely requred
  cookieFn:Function  // could also have a collection of matching types, e.g. Function | MouseEvent
}

class App extends Component {

  // define the state of this class (a concrete implementation of our abstract interface)
  state:User = { username:'Patre', age: 18, agree_flag: false, cookieFn:(): void => { // expect to return nothing
    this.setState({ agree_flag: true })
  } }

  agreeCookies = this.state.cookieFn

  render() {
    // we need to determine if the button is to be rendered or not
    let button :JSX.Element 
    if(this.state.agree_flag){
      // no need for a button!
      button = <p>Thank you for accepting cookies</p>
    } else {
      // we need a button (note onCLick is literally a function to satisfy TypeScript)
      button = <button onClick={ ()=>this.state.cookieFn() }>Agree</button>
      // button = <button onClick={ this.state.cookieFn }>Agree</button>
    }
    return (
      <div className="App">
        <section>
          <h2>Welcome {this.state.username} age: {this.state.age} agree: {this.state.agree_flag.toString()}</h2>
          {button}  
        </section>
      </div>
    );
  }
}

export default App;
