import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../constants/index';

import { connect } from 'react-redux';

class MessageForm extends Component {

    state = {
        value: ""
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }
    
    messageSubmit = e => {
        e.preventDefault()

        fetch(`${API_ROOT}/messages`,{
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                content: this.state.value,
                user_id: 1,
                conversation_id: this.props.chatId
            })
        })
        
        this.setState({value: ""})
    }
    
    render() {
        return (
            <div>
                <form className="messageForm" onSubmit={this.messageSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default MessageForm