import React, { Component } from 'react'

import {API_ROOT, HEADERS} from '../constants/index'

export default class FriendsList extends Component {
    
    componentDidMount() {
        fetch(`${API_ROOT}/auth/1`, {
            method: 'GET',
            headers: HEADERS
        })
        .then(res => res.json())
        .then(users => console.log(users))
    }

    render() {
        return (
            <div>
                FRiends                 
            </div>
        )
    }
}
