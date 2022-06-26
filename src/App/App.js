import logo from './dagojo.webp';
import './App.css';
import Login from '../Login/Login'

function App() {
  return (
    <div className="Top 10 reacts">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
