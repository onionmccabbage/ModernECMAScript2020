import logo from './logo.svg';
import './App.css';

// import our custom components
import About from './components/about'
import SampleForm from './components/sample_form'

function App() {
  // declare properties of this component
  const products = [{id:0, 'name':'dots', 'price':'2.99'},
                      {id:1, 'name':'pots', 'price':'3.99'},
                      {id:2, 'name':'spots', 'price':'4.99'}]

  return ( // this is NOT html, it is JSX. Use lower case for html and PascalCase for our own components
    <div className="App"> 
      <h2>Welcome to React</h2>
      <About title='This is a string literal' products={products} />
      <SampleForm />
    </div>
  );
}

export default App;
