import './App.css';
import logo from './dagojo.webp';
import Authentication from '../Authentication/Authentication'
import Chat from '../Chat/Chat';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem("token")
    }
    this.setToken = this.setToken.bind(this)
  }

  setToken(newToken) {
    if (newToken)
      console.log("updated token", newToken)
    this.setState({
      token: newToken
    })
  }

  render() {
    return (
      <div className="Top 10 reacts">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /><br /><br /><br />
          {this.state.token ?
            <Chat /> :
            <Authentication />
          }
        </header>
      </div>
    );
  }
}


export default App;
