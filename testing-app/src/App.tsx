import React from 'react'
import Hello from './hello'
import './App.css';


function App() {
  return (
    <article className="App">
      <h3>Testing JavaScript</h3>
      <Hello />
      <Hello name={'Ethel'} />
    </article>
  );
}

export default App;
