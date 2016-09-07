import React from 'react';

const Booking = ({booking, deleteBooking}) => (
  <li>
    <article className="booking">
      <figure className="booking-pic">
        <a href={"/#/users/" + booking.user.id}><img src={booking.user.profile ? booking.user.profile : "http://res.cloudinary.com/dnuopy1ir/image/upload/v1473008869/facebook_blank_face3_ywa1j7.jpg"} /></a>
      </figure>
      <section className="booking-info" >
        <h3><a href={"/#/users/" + booking.user.id}>{booking.user.firstname} {booking.user.lastname}</a></h3>
        <h4>{booking.user.city }</h4>
        <h4>{booking.start_date} to {booking.end_date}</h4>
      </section>
      <button className="booking-button" onClick={() => deleteBooking(booking.id)}>Cancel</button>
    </article>
  </li>
);

export default Booking;
