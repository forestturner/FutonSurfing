export const BookingConstants = {
  REQUEST_BOOKINGS: "REQUEST_BOOKINGS",
  RECEIVE_BOOKINGS: "RECEIVE_BOOKINGS",
  DELETE_BOOKING: "DELETE_BOOKING",
  CREATE_BOOKING: "CREATE_BOOKING",
  RECEIVE_BOOKING: "RECEIVE_BOOKING",
  RECEIVE_BOOKING_ERRORS: "RECEIVE_BOOKING_ERRORS",
  REQUESTS_GUESTS: "REQUESTS_GUESTS",
  RECEIVE_GUESTS: "RECEIVE_GUESTS"
};

export const receiveGuests = (guests) => ({
  type:BookingConstants.RECEIVE_GUESTS,
  guests
})
export const requestGuests = () => ({
  type:BookingConstants.REQUESTS_GUESTS
});

export const requestBookings = () => ({
  type: BookingConstants.REQUEST_BOOKINGS
});

export const receiveBookings = (bookings) => ({
  type: BookingConstants.RECEIVE_BOOKINGS,
  bookings
});

export const deleteBooking = (id) => ({
  type: BookingConstants.DELETE_BOOKING,
  id
});

export const createBooking = (booking) => ({
  type: BookingConstants.CREATE_BOOKING,
  booking
});

export const receiveBooking = (booking) => ({
  type: BookingConstants.RECEIVE_BOOKING,
  booking
});

export const receiveBookingErrors = (errors) => ({
  type: BookingConstants.RECEIVE_BOOKING_ERRORS,
  errors
});
