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
  if (bookingKeys ){
  return (
    <div>
      {
        bookingKeys.map( key => (
        <div key={bookings[key].id} ><Booking booking={bookings[key]} key={bookings[key].id} deleteBooking={deleteBooking} /></div>
        ))
      }
    </div>
  );
} else {
  return (<div> Sorry {currentUser.username} you have no bookings.</div>)
}


}

export default Bookings;
