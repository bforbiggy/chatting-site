import './Authentication.css';
import React from 'react';

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.token = props.token
        this.setToken = props.setToken
        this.state = {
            username: '',
            password: '',
            loggingIn: true
        };
        this.sendPost = this.sendPost.bind(this)
        this.fieldChange = this.fieldChange.bind(this)
        this.processAuth = this.processResponse.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
    }

    toggleLogin() {
        this.setState({ loggingIn: !this.state.loggingIn })
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

        var path = this.state.loggingIn ? 'http://localhost:3001/auth' : 'http://localhost:3001/register';
        fetch(path, requestOptions)
            .then(response => response.json())
            .then((data) => { this.processResponse(data) })
    }

    processResponse(data) {
        localStorage.setItem("token", data.token)
        this.setToken(data.token)
    }

    render() {
        let authDiv;
        if (this.state.loggingIn) {
            authDiv = <>
                <button onClick={this.sendPost}>Login</button>
                <button onClick={this.toggleLogin} className='fakeLink'>Don't have an account?</button>
            </>;
        }
        else {
            authDiv = <>
                <button onClick={this.sendPost}>Register</button>
                <button onClick={this.toggleLogin} className='fakeLink'>Meant to login instead?</button>
            </>;
        }


        return (
            <>
                <input type="text" placeholder="Username" value={this.state.username} onChange={this.fieldChange} id="username" />
                <input type="text" placeholder="Password" value={this.state.password} onChange={this.fieldChange} id="password" />
                {authDiv}
            </>
        );
    }
}

export default Authentication