import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import navbarContainer from '../navbar/navbar_container.js'
import SessionFormContainer from '../session_form/session_form_container';
import ProfileContainer from '../profile/profile_container';
import splashPage from '../splashPage/IndexPage';
class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/profile');
    }
}

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        <IndexRoute component= {splashPage}/>
          <Route path="login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="guest" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="profile" component={ProfileContainer} onEnter ={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;


// {/* <Route path="/navbar" component= { navbarContainer } /> */}







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
