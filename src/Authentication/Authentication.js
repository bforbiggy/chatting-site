import './Authentication.css';
import React from 'react';
const sjcl = require('sjcl')

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.token = props.token
        this.setParentState = props.setParentState

        this.state = {
            username: '',
            password: '',
            loggingIn: true
        };
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.processResponse = this.processResponse.bind(this)
        this.toggleLogin = this.toggleLogin.bind(this)
    }

    toggleLogin() {
        this.setState({ loggingIn: !this.state.loggingIn })
    }

    onChange(e) {
        var callerId = e.target.id;
        if (callerId === "username")
            this.setState({ username: e.target.value });
        else if (callerId === "password")
            this.setState({ password: e.target.value });
    }

    onSubmit() {
        const hashedBitArr = sjcl.hash.sha256.hash(this.state.password)
        const hashedPass = sjcl.codec.hex.fromBits(hashedBitArr)
        var requestParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: hashedPass
            })
        }

        var path = this.state.loggingIn ? 'http://localhost:3001/login' : 'http://localhost:3001/register';
        fetch(path, requestParams)
            .then(response => response.json())
            .then((data) => { this.processResponse(data) })
    }

    processResponse(data) {
        // Token received, set as user token
        if (data.token) {
            localStorage.setItem("token", data.token)
            this.setParentState({ token: data.token })
        }
        // No token received
        else {
            if (data.status === 200) {
                this.setState({
                    message: this.state.loggingIn ? "Invalid credentials." : "Account already exists."
                })
            }
            else if (data.status === 500) {
                this.setState({
                    message: "Internal server error."
                })
            }
        }
    }

    render() {
        // Determine whether to render login/register buttons
        let authDiv = this.state.loggingIn ?
            <>
                <button onClick={this.onSubmit}>Login</button><br />
                <button onClick={this.toggleLogin} className='fakeLink'>Don't have an account?</button>
            </> :
            <>
                <button onClick={this.onSubmit}>Register</button><br />
                <button onClick={this.toggleLogin} className='fakeLink'>Meant to login instead?</button>
            </>;


        // Main html
        return (
            <>
                {this.state.message}
                <input type="text" placeholder="Username" value={this.state.username} onChange={this.onChange} id="username" />
                <input type="text" placeholder="Password" value={this.state.password} onChange={this.onChange} id="password" />
                {authDiv}
            </>
        );
    }
}

export default Authentication