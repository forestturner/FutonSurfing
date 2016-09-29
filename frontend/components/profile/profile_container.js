import { connect } from 'react-redux';
import Profile from './profile';
import { updateFuton } from '../../actions/futon_actions';
import { deleteBooking, requestBookings } from '../../actions/booking_actions';
import {updateCoords} from '../../actions/coords_actions.js';
import { updateUser } from '../../actions/user_actions';
import {logIn,signUp} from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  debugger;
  const currentUser = state.session.currentUser
  const bookings = state.bookings.bookings
  const guests = state.bookings.guests
  const coords = state.coords
  const errors = state.session.errors
  return {
    currentUser,
    bookings,
    guests,
    coords,
    errors
  }
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  logIn: (user) => dispatch(logIn(user)),
  updateFuton: (id, newInfo) => dispatch(updateFuton(id, newInfo)),
  deleteBooking: (id) => dispatch(deleteBooking(id)),
  requestBookings: () => dispatch(requestBookings()),
  updateCoords: (search) => dispatch(updateCoords(search)),
  updateUser: (id, user) => dispatch(updateUser(id, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
