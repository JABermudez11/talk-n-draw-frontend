import React, { Component } from 'react'

export default class Profile extends Component {

    // token=localStorage.token

    render() {
        return (
            <div>     
                <h1>{`${localStorage.getItem("user")}`}'s PAGE</h1>
                <i>Drawings</i>
            </div>
        )
    }
}
