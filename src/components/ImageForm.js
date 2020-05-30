import React, { Component } from 'react'

import { API_ROOT } from '../constants/index'
import { ThemeConsumer } from 'styled-components';

const token = localStorage.getItem('token');

class ImageForm extends Component {

    state = {
        selectedFile: null,
        content: ""
    }

    handleSubmit = e => {        
        e.preventDefault()
        const formData = new FormData()
        formData.append("drawing", this.state.selectedFile)        
        // console.log(formData.get("drawing"))
        fetch(`${API_ROOT}/drawings`,{
            method: "POST",
            headers: {
                "Accept": "application/json",                
                Authorization: `Bearer ${token}`
            },
            body: {                
                content: this.state.content,
                user_id: localStorage.getItem("userId"),
                drawing: "erabe"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    handleFile = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    handleContent = e => {
        this.setState({
            content: e.target.value
        })
    }
  
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="content">
            Caption          
            </label> <br/>
            <input type="text" name="content" onChange={this.handleContent}/>
            <br/>
            <label htmlFor="drawing" >
            Upload Drawing<br/>          
            </label><br/>
            <input type="file" name="drawing" accept="image/*" onChange={this.handleFile}/>
            <br/><br/>
            <input type="submit" value="Submit" />
        </form>
        );   
    } 
}

export default ImageForm