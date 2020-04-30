import React, { Component } from 'react'
import Chat from '../components/Chat'

export default class Messages extends Component {
    render() {
        return (
            <div>
                <h1>MESSAGES</h1>
                <Chat id={9} />
            </div>
        )
    }
}
