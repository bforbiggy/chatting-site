import './Login.css';
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Code something decent.'
        };
        this.sendPost = this.sendPost.bind(this)
    }

    sendPost() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: 'username', password: 'password' })
        };
        fetch('http://162.84.178.38:3001/auth', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.token))
    }

    render() {
        return <div className="test">
            <input type="text" placeholder="username here" id="username"></input>
            <br />
            <input type="text" placeholder="password here" id="password"></input>
            <br />
            <button onClick={this.sendPost}>Login</button>
        </div>

    }
}

export default Login