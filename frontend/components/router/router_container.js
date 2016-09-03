import { connect } from 'react-redux';
import AppRouter from './router';
import {requestFuton, requestFutons} from '../../actions/futon_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,


});

const mapDispatchToProps = dispatch => ({
  requestFuton: id => dispatch(requestFuton(id)),
  requestFutons: () => dispatch(requestFutons())
});

//
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   // const formType = ownProps.location.pathname.slice(1);
//   // return {formType};
//   //
//
//
//   return {
//     processForm: user => dispatch(processForm(user)),
//     formType
//   };
// };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
