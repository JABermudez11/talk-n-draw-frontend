import React, { Component } from 'react'

import index from '../constants/index';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
          error: false,
          fields: {
            username: '',
            password: '',
          },
        };
      }

      handleLogin = (user) => {
        const currentUser = { currentUser: user };
        localStorage.setItem('token', user.token);
    
        this.setState({ auth: currentUser });
      };
    
      handleChange = (e) => {
        const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
        this.setState({ fields: newFields });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
    
    index.auth.login(this.state.fields.username, this.state.fields.password)
        .then((res) => {
            if (res.error) {
                this.setState({ error: true });
            } else {
                this.handleLogin(res);
                this.props.history.push('/');
            }
        });
    };
    
      render() {
        const { fields } = this.state;
    
        return (
          <div>
            {this.state.error ? <h1>Try Again</h1> : null}
            <div className="ui form">
              <form onSubmit={this.handleSubmit}>
                <div className="ui field">
                  <label>Username</label>
                  <input
                    name="username"
                    placeholder="username"
                    value={fields.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="ui field">
                  <label>Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={fields.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button type="submit" className="ui basic red button">
                  Login
                </button>
              </form>
            </div>
          </div>
        );
      }
}
