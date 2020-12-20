import React, { Component } from 'react'

import {API_ROOT, HEADERS} from '../constants/index'
import FindFriendForm from '../components/FindFriendForm'
import PendingList from './PendingList'
import "../css/Friends.css"

class FriendsList extends Component {
    
    componentDidMount() {
        fetch(`${API_ROOT}/friends`,{
            method: "GET",
            headers: HEADERS            
        })
        .then(res => res.json())
        .then(users => this.renderUsers(users))
    }
    
    renderUsers = (users) => {
        // if(users.length !== 0) {
        //     users.map(user => console.log(user))
        // }
    }

    render() {
        return (
            <div className="header">
                <div className="pending">
                    <FindFriendForm />
                    <PendingList />
                </div>
                
                <div className="container">
                    <h1>Friends List</h1>
                </div>
            </div>
        )
    }
}

export default FriendsList