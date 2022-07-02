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
  }

  render() {
    return (
      <div className="Top 10 reacts">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.token ?
            <Chat token={this.state.token} /> :
            <Authentication token={this.state.token} setParentState={this.setState} />
          }
        </header>
      </div>
    );
  }
}


export default App;
