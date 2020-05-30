import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../constants/index'

class MessagesList extends Component {

    componentDidMount() {
        fetch(`${API_ROOT}/conversations`,{
            method: "GET",
            headers: HEADERS                    
        })
        .then(res => res.json())
        .then(chats => console.log(chats))        
    }

    render() {
        return (
            <div>
                <ul>
                    <li className="what">{localStorage.getItem("recentU")}</li>
                </ul>
            </div>
        )
    }
}

export default MessagesList