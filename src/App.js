import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Simple Weather App</h1>
        <Weather />
        <div>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
