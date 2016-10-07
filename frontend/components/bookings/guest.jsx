import React from 'react';

<<<<<<< HEAD
const Guesting = ({guest, deleteBooking}) => {
  return(
    <div>
      <article className="booking">
        <div className= "futonHost">
        <img className="futonHost-img"src={guest.profile_img_url}/>
        </div>
        <section className="guest-info" >
          <h3 className="fontSize"><a href={"/#/users/" + guest.id}> with {guest.firstname} {guest.lastname}</a></h3>
          <h4 className="fontSize">{guest.start_date} to {guest.end_date}</h4>
        </section>
        <button className="booking-button" onClick={() => deleteBooking(guest.booking.id)}>Cancel</button>
      </article>
    </div>
  );
}

export default Guesting;
=======
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
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
