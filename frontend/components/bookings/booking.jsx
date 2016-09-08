import React from 'react';

const Booking = ({booking, deleteBooking}) => (
  <li>
    <article className="booking">
      <div className= "futonHost">
      <img src={booking.futon.futon_img_url}></img>
      </div>
      <section className="booking-info" >
        <h3><a href={"/#/futons/" + booking.futon.id}> with {booking.host.firstname} {booking.host.lastname}</a></h3>
        <h4>{booking.host.city }</h4>
        <h4>{booking.start_date} to {booking.end_date}</h4>
      </section>
      <button className="booking-button" onClick={() => deleteBooking(booking.id)}>Cancel</button>
    </article>
  </li>
);

export default Booking;
