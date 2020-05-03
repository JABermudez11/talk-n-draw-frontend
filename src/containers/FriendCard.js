import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../constants/index'

class FriendCard extends Component {

    handleFriend = () => {
        fetch(`${API_ROOT}/pendings`, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                owner_id: localStorage.getItem("userId"),
                friend_id: this.props.user.id
            })
        })
    }

    render() {
        return (
            <div>
                <b>Friend Card</b>
                <div>
                    {this.props.user.username}                    
                </div>                
                <button className="addBtn" onClick={this.handleFriend}>Add Friend</button>
                <button>Start Conversation</button>
            </div>
        )
    }
}
export default FriendCard