import './Login.css';
import React, { useContext } from 'react';
import tokenContext from '../tokenContext';


class Login extends React.Component {
    constructor(props) {
        super(props);
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

        fetch('http://162.84.178.38:3001/auth', requestOptions)
            .then(response => response.json())
            .then((data) => { this.processAuth(data) })
    }

    processAuth(data) {
        // TODO: Update global token state/context variable and set localstorage
        const { setToken } = useContext(tokenContext)
        setToken(data.token)
    }

    render() {
        const { token } = useContext(tokenContext)
        if (token !== null) {
            return <div className="loginPage">
                You are logged in
            </div>
        }
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