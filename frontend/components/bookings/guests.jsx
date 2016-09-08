import React from 'react';
import Guest from './guest';

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
  return (
    <div>
      {
        guestKeys.map( key => (
        <li><Guest guest={guests[key]} key={key} deleteBooking={deleteBooking} /></li>
        ))
      }
    </div>
  );



}

export default Guests;
