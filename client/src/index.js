import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
