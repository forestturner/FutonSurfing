import React from 'react';
import { Provider } from 'react-redux';
import AppRouterContainer from './router/router_container';

export default class Root extends React.Component {
  render(){
    const { store, history } = this.props;
      return (
        <Provider store={store}>
          <AppRouterContainer/>
        </Provider>
      );
    }
  }

// export default Root;
