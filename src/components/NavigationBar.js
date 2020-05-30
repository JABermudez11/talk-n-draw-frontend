import React from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom';
import { Nav,Navbar, Form } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar { background-color: #71ECCE; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #424242;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #424242;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .userName {
    display: inline-block;
    margin-right: 10px;
  }
  .logout {
    display: inline-block;
  }
`;


export const NavigationBar = (props) => {
  const loggedIn = !!props.currentUser.id;

  return(
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Talk-n-Draw</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">        
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {loggedIn ? (
            <>
              <div className="userName">
                  {`Welcome, ${props.currentUser.username}`}
              </div>
              <a
                  onClick={() => {
                      props.history.push('/login');
                      props.handleLogout();
                  }}
                  className="logout"
              >
                  <button className="ui primary button">Log Out</button>
              </a>
            </>        
                ) : null}
                     
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
  )
}


/*
class NavigationBar extends Component {
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
*/
export default withRouter(NavigationBar)