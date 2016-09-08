import { connect } from 'react-redux';
import Profile from './profile';
import { updateFuton } from '../../actions/futon_actions';
import { deleteBooking, requestBookings } from '../../actions/booking_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  bookings: state.bookings.bookings,
  guests: state.bookings.guests
});

const mapDispatchToProps = (dispatch) => ({
  updateFuton: (id, newInfo) => dispatch(updateFuton(id, newInfo)),
  deleteBooking: (id) => dispatch(deleteBooking(id)),
  requestBookings: () => dispatch(requestBookings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
