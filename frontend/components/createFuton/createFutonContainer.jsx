import {connect} from 'react-redux';
import {createFuton} from '../../actions/futon_actions.js';
import createFutonForm from './create_futon_form';
// console.log(login);
// console.log(signup);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    createFuton: futon => dispatch(createFuton(futon))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createFutonForm);
