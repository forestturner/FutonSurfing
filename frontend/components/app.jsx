import React from 'react';
import { Link } from 'react-redux';
import NavBarContainer from './navbar/navbar_container';

export default class App extends React.Component {
  render(){
    const { children } = this.props;
    return(
  <div>
    <header>
      <NavBarContainer />
    </header>
    {children}
  </div>
);
}
}
// export default App;
// /home/forest/Development/FutonSurfing/frontend/components/App.jsx
