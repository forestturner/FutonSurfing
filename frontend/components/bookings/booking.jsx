import React from 'react';

const Booking = ({booking, deleteBooking}) => (
<<<<<<< HEAD
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
=======
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
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
);

export default Booking;
