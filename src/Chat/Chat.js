import './Chat.css';
import React from 'react';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			token: localStorage.getItem("token")
		};
	}

	render() {
		return (<>
			<p>lol chat should be here</p>
			<p>btw this is ur token:{this.state.token}</p>
		</>
		);
	}
}

export default Chat;