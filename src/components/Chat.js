import React, { useState, Component } from 'react';

import { API_ROOT, API_WS_ROOT, HEADERS } from '../constants/index';
import actionCable from 'actioncable';
import MessageForm from './MessageForm'
import "../css/Messages.css"

export default class Chat extends Component {
	// const [messages, setMessages] = useState([]);

	state = {
		messages: []
	}

	// useEffect(() => {
	// 	fetch(`${API_ROOT}/conversations/${id}`)
	// 		.then((r) => r.json())
	// 		.then((chat) => setMessages(chat.messages));
	// }, []);
	

	

	componentDidMount() {
	const cable = actionCable.createConsumer(API_WS_ROOT);
	
	const channel = cable.subscriptions.create(
		{ 
			channel: 'ConversationsChannel', 
			id: this.props.id 
		},
		{
			received: function (data) {
				console.log('Connected');
				this.setState({
					messages: data
				})
			},
		}
	);

	fetch(`${API_ROOT}/conversations/${this.props.id}`,{
		method: "GET",
		headers: HEADERS,	
	})
	.then(r => r.json())
	.then(m => this.setState({ messages: m.messages}))
	}
	
	// console.log(messages)
	
	render() {
		return (
			<div className="chat">
				<ul>                
					{this.state.messages.map((message) => (
						<p><b>{message.user.username}</b>: {message.content}</p>
					))}
				</ul>            
			</div>
		);
	}
}