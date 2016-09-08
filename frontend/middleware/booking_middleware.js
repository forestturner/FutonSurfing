import { BookingConstants, receiveBookings, receiveBooking, receiveBookingErrors, requestBookings } from '../actions/booking_actions';
import { fetchBookings, fetchBooking, deleteBooking } from '../util/booking_util';

const BookingMiddleware = ({getState, dispatch}) => next => action => {
  console.log(`dipatching .. ${action.type}`);
  let success;
  let error;
  switch (action.type) {
    case BookingConstants.REQUEST_BOOKINGS:
      success = (bookings) => dispatch(receiveBookings(bookings));
      error = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
      fetchBookings(success, error);
      return next(action);
    case BookingConstants.CREATE_BOOKING:
      console.log("creating booking in middleware");
      success = (booking) => dispatch(receiveBooking(booking));
      error = (errors) => dispatch(receiveBookingErrors(errors.responseJSON));
      fetchBooking(action.booking, success, error);
      return next(action);
    case BookingConstants.DELETE_BOOKING:
      success = () => dispatch(requestBookings());
      error = (errors) => console.log(errors);
      deleteBooking(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default BookingMiddleware;
