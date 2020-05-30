import React, { Component } from 'react'

import {API_ROOT} from '../constants/index'
import '../css/Register.css'

export default class Register extends Component {

    state = {        
        fields: {
          username: '',
          password: '',
        }
    }

    handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
    };

    handleRegisterSubmit = (e) => {
        e.preventDefault();
        localStorage.clear()
        fetch(`${API_ROOT}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'},
            body: JSON.stringify({ 
                user: {
                    username: this.state.fields.username, 
                    password: this.state.fields.password
                } 
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.errors) {
              console.log(res.errors);
              this.setState({ 
                error: true, 
                message: res.errors, 
                fields: {
                  username: '',
                  password: ''
                } 
              });
              localStorage.clear();
            } else {
              // console.log(res)
              this.handleLogin(res);
              this.props.history.push('/profile');
            }}
        )
    }

    handleLogin = (user) => {
        // console.log(user.user)
        const currentUser = { currentUser: user };
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', user.user.username);
        localStorage.setItem('userId', user.user.id);
    
        this.setState({ auth: currentUser });        
      };

    //() => signup(this.state.username, this.state.password)

    render() {
        return (
            <div className="registerForm">                                
                <form onSubmit={this.handleRegisterSubmit} className="ever">
                <h2>Talk-n-Draw</h2>
                    <div className="name">
                        <label>Username</label>
                        <input
                        name="username"
                        placeholder="Username"
                        value={this.state.fields.username}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="pass">
                        <label>Password</label>
                        <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.fields.password}
                        onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="ui basic purple button">
                        Register
                    </button>
                </form>
            </div>
        )
    }
}
