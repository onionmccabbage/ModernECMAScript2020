import React from 'react'
import Weather from './components/Weather'
import './App.css'

// a functional component since there is no state needed here
function App() {
  return (
    <div className="App">
      <h3>Review 3 Weather App</h3>
      {/* here we instantiate the Weather component, which has state, so it is a class-based component */}
      <Weather />
    </div>
  );
}

export default App;
