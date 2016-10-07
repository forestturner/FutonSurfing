import { BookingConstants } from '../actions/booking_actions';
import { merge } from 'lodash';

<<<<<<< HEAD
let defaultState = {bookings: [], guests: [], errors: [], received: false}

const BookingReducer = (state = defaultState, action) => {
  let newState;
    // debugger;
  switch (action.type) {
    case BookingConstants.RECEIVE_BOOKINGS:
      newState = merge({}, state, { bookings: action.bookings.bookings, guests: action.bookings.guests, errors: [] });
      // newState = {bookings: action.bookings, guests: action.bookings.guests, errors: []};
      newState.received = false;
      return newState;
    case BookingConstants.RECEIVE_BOOKING:
      newState = merge({}, state);
      newState.bookings.push(action.booking);
      newState.received = true;
      return newState;
    case BookingConstants.RECEIVE_BOOKING_ERRORS:
      newState = merge({}, state);
      console.log(action.errors);
=======
let defaultState = {bookings: {}, guests: {}, errors: [], received: false}

const BookingReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case BookingConstants.RECEIVE_BOOKINGS:

      newState = {bookings: action.bookings, guests: action.bookings.guests, errors: action.errors, received: action.received};
      newState.received = false;
      return newState;
    case BookingConstants.RECEIVE_BOOKING:
      newState = merge({}, state, action.booking);
      // newState.bookings.push(action.booking);
      newState.received = true;
      return newState;
    case BookingConstants.RECEIVE_BOOKING_ERRORS:

      newState = merge({}, state);
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
      newState.errors = action.errors;
      newState.received = false;
      return newState;
    default:
      return state;
  }
};

export default BookingReducer;
