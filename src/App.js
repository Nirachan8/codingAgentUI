import logo from './logo.svg';
import './App.css';

function App() {
  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={handleSignUp}>Sign Up</button>
      </header>
    </div>
  );
}

export default App;
