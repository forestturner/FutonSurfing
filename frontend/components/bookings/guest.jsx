import React from 'react';

const Booking = ({guest, deleteBooking}) => (
  <li>
    <article className="guest">
      <div className= "futonHost">
      <img src={guest.profile_img_url}></img>
      </div>
      <section className="guest-info" >
        <h3><a href={"/#/users/" + guest.id}> with {guest.host.firstname} {guest.host.lastname}</a></h3>
        <h4>{guest.booking.start_date} to {guest.booking.end_date}</h4>
      </section>
      <button className="guest-button" onClick={() => deleteBooking(guest.booking.id)}>Cancel</button>
    </article>
  </li>
);

export default Booking;
