import { BookingConstants, receiveBookings, receiveBooking, receiveBookingErrors, requestBookings } from '../actions/booking_actions';
import { fetchBookings, fetchBooking, deleteBooking, fetchGuests } from '../util/booking_util';

const BookingMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let errors;
  switch (action.type) {
    case BookingConstants.REQUEST_BOOKINGS:
      success = (bookings) => dispatch(receiveBookings(bookings));
      errors = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
      fetchBookings(success, errors);
      return next(action);
    // case BookingConstants.REQUESTS_GUESTS:
    //   success = (guests) => dispatch(receiveGuests(guests));
    //   errors = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
    //   fetchGuests(success, errors);
    //   return next(action);
    case BookingConstants.CREATE_BOOKING:
      success = (bookings) => dispatch(receiveBookings(bookings));
      // success = (booking) => dispatch(receiveBooking(booking));
      errors = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
      fetchBooking(action.booking, success, errors);
      return next(action);
    case BookingConstants.DELETE_BOOKING:
      success = () => dispatch(requestBookings());
      errors = (errors) => console.log(errors);
      deleteBooking(action.id, success, errors);
      return next(action);
    default:
      return next(action);
  }
};

export default BookingMiddleware;
