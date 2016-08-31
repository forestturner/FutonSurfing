import React from 'react';
import { Link } from 'react-redux';
import navBarContainer from './navbar/navbar_container';

const App = ({children}) => (
  <div>
    <header>
      <navBarContainer />
    </header>
    {children}
  </div>
);

export default App;
