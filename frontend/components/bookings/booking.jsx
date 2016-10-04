import React from 'react';

const Booking = ({booking, deleteBooking}) => (
  <div>
    <article className="booking">
      <div className= "futonHost">
        <img className="futonHost-img"src={booking.futon.futon_img_url}/>
        <img className="image-nav-booking" src={booking.host.profile_img_url}/>
      </div>
      <section className="booking-info" >
        <h3 className="fontSize"><a href={"/#/futons/" + booking.futon.id}> with {booking.host.firstname} {booking.host.lastname}</a></h3>
        <h4 className="fontSize">{booking.host.city }</h4>
        <h4 className="fontSize">{booking.start_date} to {booking.end_date}</h4>
      </section>
      <button className="booking-button" onClick={() => deleteBooking(booking.id)}>Cancel</button>
    </article>
  </div>
);

export default Booking;
