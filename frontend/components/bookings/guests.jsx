import React from 'react';
import Guesting from './guest';

const Guests = ({guests, deleteBooking}) => {
  // let guestMapped = guests.map((guest) => (
  //   <Guest key={"guest" + guest.id} guest={guest} deleteGuest={deleteGuest}/>
  // ));
  // return (
  //   <section className="guests">
  //     <ul>
  //       {guestMapped}
  //     </ul>
  //   </section>
  // );
  const guestKeys = Object.keys(guests);
  if(guestKeys){

  return (
    <div>
      {
        guestKeys.map( key => (
        <div key={guests[key].id}><Guesting guest={guests[key]}  deleteBooking={deleteBooking} /></div>
        ))
      }
    </div>
  );
} else {
  return (<div> Sorry {currentUser.username} you have no bookings.</div>)
}


}

export default Guests;
