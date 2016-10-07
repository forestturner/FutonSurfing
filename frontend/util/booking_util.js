export const fetchBookings = (success, errors) => {
  $.ajax({
    url: "api/bookings",
    method: "GET",
    success,
    errors
  });
};

<<<<<<< HEAD

// export const fetchGuests = (success, errors) => {
//   $.ajax({
//     url: "api/bookings",
//     method: "GET",
//     success,
//     errors
//   });
// };

=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
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
