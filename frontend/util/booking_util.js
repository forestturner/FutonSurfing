export const fetchBookings = (success, errors) => {
  $.ajax({
    url: "api/bookings",
    method: "GET",
    success,
    errors
  });
};

export const fetchBooking = (booking, success, errors) => {
  $.ajax({
    url: "api/bookings",
    method: "POST",
    data: {booking},
    success,
    errors
  });
};

export const deleteBooking = (id, success, errors) => {
  $.ajax({
    url: `api/bookings/${id}`,
    method: "DELETE",
    success,
    errors
  });
};
