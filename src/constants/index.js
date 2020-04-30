export const API_ROOT = 'http://localhost:3000';
export const API_WS_ROOT = 'ws://localhost:3000/cable';

const token = localStorage.getItem('token');

export const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${token}`
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const signup = (username, password) => {
  return fetch(`${API_ROOT}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: HEADERS
  }).then(res => res.json());
};

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser
  }
};