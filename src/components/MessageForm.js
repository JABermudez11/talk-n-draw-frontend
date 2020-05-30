import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../constants/index';

// import { connect } from 'react-redux';

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
                user_id: localStorage.getItem("userId"),
                conversation_id: this.props.id
            })
        })
        
        this.setState({value: ""})
    }
    
    render() {
        return (
            <div className="messageForm">
                <form  onSubmit={this.messageSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange} 
                    className="msgFormTextArea"/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default MessageForm