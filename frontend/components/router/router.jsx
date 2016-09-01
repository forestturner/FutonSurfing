import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import navbarContainer from '../navbar/navbar_container.js'
import SessionFormContainer from '../session_form/session_form_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="login" component={ SessionFormContainer }/>
          <Route path="signup" component={ SessionFormContainer }/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;


// {/* <Route path="/navbar" component= { navbarContainer } /> */}







//   this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
//   this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
// }
//
// ensureLoggedIn(nextState, replace){
//   const currentUser = this.props.currentUser;
//   if (!currentUser) {
//     replace('/login');
//   }
// }
//
// redirectIfLoggedIn(nextState, replace){
//   const currentUser = this.props.currentUser;
//   if (currentUser) {
//     replace('/');
//   }
// }
{/* <Route path="/login" component={ SessionFormContainer }/> //onEnter={this.redirectIfLoggedIn}/>
<Route path="/signup" component={ SessionFormContainer }/> //onEnter={this.redirectIfLoggedIn}/>
 */}
















//
//
//
//
//
//
