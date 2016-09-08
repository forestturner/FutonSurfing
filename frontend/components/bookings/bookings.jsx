import React from 'react';
import Booking from './booking';

const Bookings = ({bookings, deleteBooking}) => {
  // let bookingMapped = bookings.map((booking) => (
  //   <Booking key={"booking" + booking.id} booking={booking} deleteBooking={deleteBooking}/>
  // ));
  // return (
  //   <section className="bookings">
  //     <ul>
  //       {bookingMapped}
  //     </ul>
  //   </section>
  // );
  const bookingKeys = Object.keys(bookings);
  return (
    <div>
      {
        bookingKeys.map( key => (
        <li><Booking booking={bookings[key]} key={key} deleteBooking={deleteBooking} /></li>
        ))
      }
    </div>
  );



}

export default Bookings;
