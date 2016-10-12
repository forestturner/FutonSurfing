import {connect} from 'react-redux';
import FutonShow from './futon_show';
import {requestFuton} from '../../actions/futon_actions';
import {updateFilter,updateBounds} from '../../actions/filter_actions';
import {requestFutons} from '../../actions/futon_actions';
import { createBooking } from '../../actions/booking_actions';
import { logOut, logIn, signUp } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  // const currentUserFutonId = state.session.currentUser.futon.id
  const currentUser = state.session.currentUser;
  const futonId = parseInt(ownProps.params.futonId);
  const futons = state.futons.futons;
  const filters = state.filters;
  // const futons = state.futons[futonId] || {};
  const futon = state.futons.futons[futonId] || {};
  const host = futon.user;
  let errors = state.bookings.errors;
  let received = state.bookings.received;
  return {
    futonId,
    futon,
    filters,
    host,
    currentUser,
    errors,
    // currentUserFutonId,
    futons
  };
};
const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  requestFutons: () => dispatch(requestFutons()),
  logIn: (user) => dispatch(logIn(user)),
  createBooking: (booking) => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FutonShow);
