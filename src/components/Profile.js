import React, { Component } from 'react'

import '../css/Profile.css'
import ImageForm from './ImageForm'

export default class Profile extends Component {

    // token=localStorage.token

    render() {
        return (
            <div className="header">     
                <div>
                    <h1>{`${localStorage.getItem("user")}`}'s PAGE</h1>
                    <i>Drawings</i>

                    <div className="imageForm">
                        <ImageForm />
                    </div>
                </div>
                <div className="userInterface">

                </div>
            </div>
        )
    }
}
