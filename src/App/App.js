import logo from './dagojo.webp';
import './App.css';
import Login from '../Login/Login'
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
    localStorage.setItem("token", newToken)
    this.setState({
      token: newToken
    })
  }

  render() {
    return (
      <div className="Top 10 reacts">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {(this.state.token &&
            <div className="loginPage">
              You are logged in {this.state.token}
            </div>)
            || (<Login token={this.state.token} setToken={this.setToken} />)}
        </header>
      </div>
    );
  }
}


export default App;
