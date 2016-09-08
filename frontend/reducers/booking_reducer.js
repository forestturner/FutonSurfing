import { BookingConstants } from '../actions/booking_actions';
import { merge } from 'lodash';

let defaultState = {bookings: [], guests: [], errors: [], received: false}

const BookingReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case BookingConstants.RECEIVE_BOOKINGS:
      newState = {bookings: action.bookings, guests: action.bookings.guests, errors: []};
      newState.received = false;
      return newState;
    case BookingConstants.RECEIVE_BOOKING:
      newState = merge({}, state);
      newState.bookings.push(action.booking);
      newState.received = true;
      return newState;
    case BookingConstants.RECEIVE_BOOKING_ERRORS:
    debugger
      newState = merge({}, state);
      console.log(action.errors);
      newState.errors = action.errors;
      newState.received = false;
      return newState;
    default:
      return state;
  }
};

export default BookingReducer;
