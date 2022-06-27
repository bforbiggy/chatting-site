import logo from './dagojo.webp';
import './App.css';
import Login from '../Login/Login'
import React, { useState } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="Top 10 reacts">
        <header className="Header">
          <img src={logo} className="App-logo" alt="logo" />

          <Login />

        </header>
      </div>
    );
  }
}


export default App;
