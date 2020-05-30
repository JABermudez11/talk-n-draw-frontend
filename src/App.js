import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar'

import Profile from './components/Profile'
import Canvas from './components/Canvas'
import FriendsList from './containers/FriendsList'
import Messages from './containers/Messages'
import Login from './components/Login'
import Register from './components/Register'
import index from './constants/index'

class App extends Component {

  state = { 
    auth: { 
      currentUser: {} 
    } ,
    error: false,
    message: "",
    fields: {
      username: '',
      password: ''
    }
  };

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      index.auth.getCurrentUser().then((user) => {
        const currentUser = { currentUser: user };

        this.setState({ auth: currentUser });
      });
    }
  }  

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ auth: { currentUser: {} } });
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar 
            currentUser={this.state.auth.currentUser}
            handleLogout={this.handleLogout}
          />

          <SideBar />

          <div>
            <Switch>
              <Route exact path="/profile" component={Profile} />              
              <Route exact path="/messages" component={Messages} />
              <Route exact path="/friends" component={FriendsList} />
              <Route exact path="/canvas" component={Canvas} />
              <Route path="/login"  handleLogin={this.handleLogin} component={Login} />
              <Route path="/register"  handleLogout={() => (this.handleLogout)} 
                 component={Register} 
                handleChange={this.handleChange} fields={this.state.fields}/>
            </Switch>  
          </div>				  
        </Router>
      </div>
    );
  }
}

export default App;
