import React, { useState, useEffect } from 'react';

import { API_ROOT, API_WS_ROOT } from '../constants/index';
import actionCable from 'actioncable';
import MessageForm from './MessageForm'

export default function Chat({ id }) {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		fetch(`${API_ROOT}/conversations/${id}`)
			.then((r) => r.json())
			.then((chat) => setMessages(chat.messages));
	}, []);

	const cable = actionCable.createConsumer(API_WS_ROOT);

	const channel = cable.subscriptions.create(
		{ channel: 'ConversationsChannel', id: id },
		{
			received: function (data) {
				console.log('hit');
				setMessages([...messages, data]);
			},
		}
	);

	return (
		<div>
			<ul>                
				{messages.map((message) => (
					<p><b>{message.user.username}</b>: {message.content}</p>
				))}
			</ul>
            <MessageForm chatId={id} />
		</div>
	);
}