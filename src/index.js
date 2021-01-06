import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Quiz from './Quiz';
import Profile from './Profile';
import Message from './Message/Message';
import AppTheme from './Exercise 6.01/AppTheme'
import Parent from './Exercise 6.02/Parent'
import ParentProduct from './Activity 6.01/ParentProduct'
import Animal from './Exercise 7.01/Animal'
import UncontrolledForm from './Exercise 8.01/UncontrolledForm'
import ControlledForm from './Exercise 8.01/ControlledForm'
import FormikForm from './Exercise 8.01/FormikForm'
import MyEnhancedLoginForm from './Exercise 8.01/MyEnhancedLoginForm'
import Routing from './Exercise 9.0.1/Routing'
import AppStore from './Activity 9.01/AppStore'
import ImageToggle from './Exercise 11.01/ImageToggle'
import LoginButton from './Exercise 11.02/LoginButton'
import Counter from './Activity 11.01/Counter'
import UsernameForm from './Exercise 12.02/SimpleForm'
import Chat from './Activity 12.01/Chat'
import ShoppingCart from './Exercise 13.01/ShoppingCart'
import reportWebVitals from './reportWebVitals';
import Stock from './Exercise 12.01/Stock'
import RoutingPage from './homepage'

ReactDOM.render(
  <React.StrictMode>
    <RoutingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
