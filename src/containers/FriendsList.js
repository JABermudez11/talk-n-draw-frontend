import React, { Component } from 'react'

// import {API_ROOT, HEADERS} from '../constants/index'
import FindFriendForm from '../components/FindFriendForm'

export default class FriendsList extends Component {
    
    

    render() {
        return (
            <div>
                <FindFriendForm />
                <h1>Friends List</h1>                
            </div>
        )
    }
}
