import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import './index.css';
import Routes from './routes'

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
