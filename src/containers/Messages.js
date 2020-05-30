import React, { Component } from 'react'

import Chat from '../components/Chat'
import { API_ROOT, HEADERS } from '../constants/index'
import MessagesList from '../components/MessagesList'
import MessageForm from '../components/MessageForm'

export default class Messages extends Component {

    // componentDidMount() {
    //     fetch(`${API_ROOT}/conversations`,{
    //         method: "GET",
    //         headers: HEADERS                    
    //     })
    //     .then(res => res.json())
    //     .then(chats => console.log(chats))
    // }

    render() {
        return (
            <div>
                <div className="header">
                    <div>
                        <h1>MESSAGES</h1>
                        <MessagesList />                
                    
                    </div>
                    
                    <div className="chatContainer">
                        <Chat id={10} />
                        <MessageForm id={10} />
                    </div>
                </div>                
            </div>
        )
    }
}
