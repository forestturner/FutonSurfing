import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import App from '../app';
import navbarContainer from '../navbar/navbar_container.js'
import SessionFormContainer from '../session_form/session_form_container';
import ProfileContainer from '../profile/profile_container';
import splashPage from '../splashPage/IndexPage';
import FutonShowContainer from '../futon_show/futon_show_container';
import FutonsShowContainer from '../futon_all/futons_show_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this.getFuton = this.getFuton.bind(this);
    this.getFutons = this.getFutons.bind(this);
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    console.log(this.props);
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
  getFuton(nextState, replace) {
    const currentUser = this.props.currentUser;

    this.props.requestFuton(currentUser.id);

  }
 getFutons(nextState,replace) {
   this.props.requestFutons()
 }



  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        <IndexRoute component= {splashPage}/>
          <Route path="login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="guest" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn}/>
          <Route path="futons" component={ FutonsShowContainer} onEnter ={this.getFutons }/>
          <Route path="futons/:futonId" component={FutonShowContainer} onEnter={this.getFuton}/>
          {/* <Route path ="publicProfile/:userId" component={publicProfileContainer} /> */}
          <Route path="profile" component={ProfileContainer} onEnter ={this._ensureLoggedIn}/>
        </Route>
      </Router>
    );
  }
}

export default withRouter(AppRouter);


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
