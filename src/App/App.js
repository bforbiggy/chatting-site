import logo from './dagojo.webp';
import './App.css';
import Login from '../Login/Login'
import React, { useState } from 'react';
import tokenContext from '../tokenContext';

class App extends React.Component {
  render() {
    const [token, setToken] = useState(tokenContext)
    return (
      <div className="Top 10 reacts">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <tokenContext.Provider value={{ token, setToken }}>
            <Login />
          </tokenContext.Provider>
        </header>
      </div>
    );
  }
}


export default App;
