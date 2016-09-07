import { BookingConstants, receiveBookings, receiveBooking, receiveBookingErrors, requestBookings } from '../actions/booking_actions';
import { fetchBookings, createBooking, deleteBooking } from '../util/booking_util';

const BookingMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error;
  switch (action.type) {
    case BookingConstants.REQUEST_BOOKINGS:
      success = (bookings) => dispatch(receiveBookings(bookings));
      error = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
      fetchBookings(success, error);
      return next(action);
    case BookingConstants.CREATE_BOOKING:
      success = (booking) => dispatch(receiveBooking(booking));
      error = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
      createBooking(action.booking, success, error);
      return next(action);
    case BookingConstants.DELETE_BOOKING:
      success = () => dispatch(requestBookings());
      error = (errors) => console.log(errors);
      deleteBooking(action.id, success, error);
      break;
    default:
      return next(action);
  }
};

export default BookingMiddleware;
