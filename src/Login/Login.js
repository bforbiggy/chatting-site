import './Login.css';
import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.token = props.token
        this.setToken = props.setToken
        this.state = {
            username: '',
            password: ''
        };
        this.sendPost = this.sendPost.bind(this)
        this.fieldChange = this.fieldChange.bind(this)
        this.processAuth = this.processAuth.bind(this)
    }

    fieldChange(e) {
        var callerId = e.target.id;
        if (callerId === "username")
            this.setState({ username: e.target.value });
        else if (callerId === "password")
            this.setState({ password: e.target.value });
    }

    sendPost() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        };

        fetch('http://localhost:3001/auth', requestOptions)
            .then(response => response.json())
            .then((data) => { this.processAuth(data) })
    }

    processAuth(data) {
        // TODO: Check response for errors
        this.setToken(data.token)
        localStorage.setItem("token", data.token)
    }

    render() {
        return (
            <div className="loginPage">
                <input type="text" placeholder="Username" value={this.state.username} onChange={this.fieldChange} id="username" />
                <br />
                <input type="text" placeholder="Password" value={this.state.password} onChange={this.fieldChange} id="password" />
                <br />
                <button onClick={this.sendPost}>Login</button>
            </div>
        );
    }
}

export default Login