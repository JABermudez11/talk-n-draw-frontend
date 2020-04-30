import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { API_WS_ROOT } from './constants/index';
import { Provider } from 'react-redux';
import store from './redux/Store'


import actionCable from 'actioncable';

const CableApp = {}
CableApp.cable = actionCable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(
  <div>    
    <Router>
      <Provider store={store}>
        <ActionCableProvider url={API_WS_ROOT}>
          <App />
        </ActionCableProvider>   
      </Provider>         
    </Router>
  </div>,
  document.getElementById('root')  
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
