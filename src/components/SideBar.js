import React from 'react';
import { StyledSideNav, StyledNavItem } from '../css/Style';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/profile', /* path is used as id to check which NavItem is active basically */
                  name: 'Profile',
                  css: 'fa fa-fw fa-user',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/friends',
                  name: 'friends',
                  css: 'fa fa-fw fa-user-friends',
                  key: 2
                },
                {
                    path: '/messages',
                    name: 'messages',
                    css: 'fas fa-comments',
                    key: 3
                },
                {
                  path: '/canvas',
                  name: 'canvas',
                  css: 'fas fa-palette',
                  key: 4
                }                
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>                
                <StyledNavItem>
                    <Link to="/profile" name="profile" >
                        <div className="fa fa-fw fa-user"></div>
                    </Link>
                </StyledNavItem>
                <StyledNavItem>
                    <Link to="/messages" name="messages" >
                        <div className="fas fa-comments"></div>
                    </Link>
                </StyledNavItem>
                <StyledNavItem>
                    <Link to="/friends" name="friends" >
                        <div className="fa fa-fw fa-user-friends"></div>
                    </Link>
                </StyledNavItem>
                <StyledNavItem>
                    <Link to="/canvas" name="canvas" >
                        <div className="fas fa-palette"/>
                    </Link>
                </StyledNavItem>
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);


class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
        alert("eaber")
    }

    render() {
        console.log(this.props)
        const { active } = this.props;
        return(
            <StyledNavItem active={active} onClick={this.handleClick}>
                <Link to={this.props.path} className={this.props.css} >
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}