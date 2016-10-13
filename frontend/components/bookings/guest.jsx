import React from 'react';

const Guesting = ({guest, deleteBooking}) => {
  return(
    <div>
      <article className="booking">
        <div className= "futonHost">
        <img className="futonHost-img"src={guest.guest.profile_img_url}/>
        </div>
        <section className="guest-info" >
          <h3 className="fontSize"><a href={"/#/users/" + guest.id}> with {guest.guest.firstname} {guest.guest.lastname}</a></h3>
          <h4 className="fontSize">{guest.start_date} to {guest.end_date}</h4>
        </section>
        <button className="booking-button" onClick={() => deleteBooking(guest.booking.id)}>Cancel</button>
      </article>
    </div>
  );
}

export default Guesting;
