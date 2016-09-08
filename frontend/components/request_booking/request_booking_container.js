import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import RequestBooking from './request_booking';


const mapStateToProps = (state,ownProps) => {
  let futonId = ownProps.params.futonId;
  let user = state.session.currentUser;
  let errors = state.bookings.errors;
  let received = state.bookings.received;
 return {
  futonId,
  user,
  errors,
  received
 }
}

//
// const mapStateToProps = (state) => ({
//   user: state.currentUser,
//   errors: state.bookings.errors,
//   received: state.bookings.received
// });

const mapDispatchToProps = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestBooking);
