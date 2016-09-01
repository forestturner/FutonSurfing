import {connect} from 'react-redux';
import SessionForm from './session_form';
import {logIn,signUp} from '../../actions/session_actions.js';
// console.log(login);
// console.log(signup);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // const formType = ownProps.location.pathname.slice(1);
  // return {formType};
  //
  // debugger
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? logIn : signUp;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
