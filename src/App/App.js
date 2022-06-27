import logo from './dagojo.webp';
import './App.css';
import Login from '../Login/Login'
import React, { useState } from 'react';

const UserToken = React.createContext("null");
class App extends React.Component {
  render() {
    const [token, setToken] = useState(localStorage.getItem("token"));

    return (
      <div className="Top 10 reacts">
        <UserToken.Provider value= >
          <header className="Header">
            <img src={logo} className="App-logo" alt="logo" />
            <Login />
          </header>
        </UserToken.Provider>
      </div>
    );
  }
}


export default App;
