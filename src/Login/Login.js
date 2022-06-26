import './Login.css';
import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.sendPost = this.sendPost.bind(this)
        this.fieldChange = this.fieldChange.bind(this)
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

        fetch('http://162.84.178.38:3001/auth', requestOptions)
            .then(response => response.json())
            .then(data => typeof (data.token) == 'string' ? localStorage.setItem("token", data.token) : console.log("token not found"))
    }

    render() {
        const isLoggedIn = localStorage.getItem("token")
        return <div className="loginPage">
            {
                typeof (isLoggedIn) == 'string' ? 'You are logged in' : <div>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.fieldChange} id="username" />
                    <br />
                    <input type="text" placeholder="Password" value={this.state.password} onChange={this.fieldChange} id="password" />
                    <br />
                    <button onClick={this.sendPost}>Login</button>
                </div>
            }
        </div>

    }
}

export default Login