import React, { Component } from 'react'
import { withRouter, NavLink, Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        const loggedIn = !!this.props.currentUser.id;

        return (
            <div className="navBar">
                <NavLink to="/profile" >Profile</NavLink>
                <NavLink to="/messages" >Messages</NavLink>
                <NavLink to="/friends" >Friends</NavLink>
                <NavLink to="/canvas" >Canvas</NavLink>

                {loggedIn ? (
                    <div className="item">
                        {`Welcome ${this.props.currentUser.username}`}
                    </div>
                ) : null}
                {loggedIn ? (
                    <a
                        onClick={() => {
                            this.props.history.push('/login');
                            this.props.handleLogout();
                        }}
                        className="item"
                    >
                        <button className="ui primary button">Log Out</button>
                    </a>
                ) : (
                <Link to="/login" className="item">
                    <div className="ui primary button">Log In</div>
                </Link>
                )}
                <NavLink to="/register">New Account</NavLink>                
            </div>
        )
    }
}

export default withRouter(Navbar)