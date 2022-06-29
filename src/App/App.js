import './App.css';
import logo from './dagojo.webp';
import Login from '../Login/Login'
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
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.token ? <Chat /> : <Login token={this.state.token} setToken={this.setToken} />}
        </header>
      </div>
    );
  }
}


export default App;
