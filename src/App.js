import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> DIG4639 Mobile Dev</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src="https://www.datocms-assets.com/48401/1637694888-javascript-logo.svg" alt="Lamp" width="120" height="120"></img>
        <p>
          Jewel Dias' React Journey 
        </p>
        <a
          className="App-link"
          href="https://github.com/Jeweld27/DIG4639-Portfolio2"
          target="_blank"
          rel="noopener noreferrer"
        >
         Check out my latest application using React Native.
        </a>
      </header>
    </div>
  );
}

export default App;
