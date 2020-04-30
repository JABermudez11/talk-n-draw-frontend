import React, { Component } from 'react'

import {API_ROOT, HEADERS} from '../constants/index'

export default class FindFriendForm extends Component {
    
    state = {
        username: ""
    }

    handleChange = e => {
        const newState = {username: e.target.value}
        this.setState({ username: newState})
    }
    
    handleSubmit = e => {
        e.preventDefault()

        console.log(this.state.username)

        fetch(`${API_ROOT}/users`,{
            method: "GET",
            headers: HEADERS
        })
        .then(res => res.json())
        .then(users => this.filter(users))
    }

    filter = users => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === this.state.username) {
                return (users[i])
            }
        }
    }

    

    //value={this.state.username}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  
                    placeholder="username" onChange={this.handleChange} />
                    <button type="submit">Search for user</button>
                </form>
            </div>
        )
    }
}
