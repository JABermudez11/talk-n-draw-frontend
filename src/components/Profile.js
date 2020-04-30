import React, { Component } from 'react'

export default class Profile extends Component {

    token=localStorage.token

    render() {
        return (
            <div>     
                <h1>PROFILE PAGE</h1>
                <i>Your Drawings</i>
            </div>
        )
    }
}
