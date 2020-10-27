import './App.css'
import SwapiForm from './components/swapi_form'
// we will need this static asset so import it here
import sw_banner from './assets/starwarsBanner.jpg'

function App() {
  return (
    <div className="App">
      {/* this header would make a good component */}
      <header> 
        <img width='100%' src={sw_banner} />
      </header>
      <article>
        <SwapiForm />
      </article>
    </div>
  );
}

export default App;
