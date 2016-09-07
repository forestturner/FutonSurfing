import React from 'react';
import Booking from './booking';

const Bookings = ({bookings, deleteBooking}) => {
  debugger;
  let bookingEls = bookings.map((booking) => (
    <Booking key={"booking" + booking.id} booking={booking} deleteBooking={deleteBooking}/>
  ));
  return (
    <section className="bookings">
      <ul>
        {bookingEls}
      </ul>
    </section>
  );
}

export default Bookings;
