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
            .then(data => console.log(data.token))
    }

    render() {
        return <div className="loginPage">
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.fieldChange} id="username" />
            <br />
            <input type="text" placeholder="Password" value={this.state.password} onChange={this.fieldChange} id="password" />
            <br />
            <button onClick={this.sendPost}>Login</button>
        </div>

    }
}

export default Login