import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';


import {logIn,signUp} from './actions/session_actions.js';


document.addEventListener('DOMContentLoaded', () => {


  let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let height = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight;

  let store;
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser, errors: [], width: width, height:height }};
    store = configureStore(initialState);
  }
  else {
    store = configureStore();
  }



  // window.logIn = logIn;
  // window.signUp = signUp;
  window.store = store;
  // let store = configureStore();
  const root = document.getElementById('NavBar');
  ReactDOM.render(<Root store={store}/>, root);
   //ReactDOM.render(<h1>FUTON SURFING</h1>, root);
});
