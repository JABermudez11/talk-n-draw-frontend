import React, { Component } from 'react'

import { API_ROOT, HEADERS } from '../constants/index'
import "../css/FriendCard.css"

class FriendCard extends Component {

    handleFriend = () => {
        localStorage.removeItem("recentU")
        localStorage.removeItem("recentUId")

        localStorage.setItem("recentU",this.props.user.username)
        localStorage.setItem("recentUId",this.props.user.id)

        fetch(`${API_ROOT}/pendings`, {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                owner_id: localStorage.getItem("userId"),
                friend_id: this.props.user.id
            })
        })
    }

    handleMsg = () => {
        // console.log(this.props.user.id)

        let firstMsg = "Hello!"

        fetch(`${API_ROOT}/messages`,{
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify({
                content: firstMsg,
                conversation_id: 10,
                user_id: localStorage.getItem("userId")
            })
        })
        .then(r => r.json())
        .then(m => console.log("sent"))
    }

    render() {
        return (
            <div className="friendCard">                
                <div>
                    {this.props.user.username}                    
                </div>                
                <button className="addBtn" onClick={this.handleFriend}>
                    <div class="fas fa-user-plus"></div>
                </button>
                <button className="msgBtn" onClick={this.handleMsg}>
                    <div class="fas fa-comments"></div>
                </button>
            </div>
        )
    }
}
export default FriendCard