import React from 'react';
<<<<<<< HEAD
import Guesting from './guest';
=======
import Guest from './guest';
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e

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
<<<<<<< HEAD
  if(guestKeys){

=======
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
  return (
    <div>
      {
        guestKeys.map( key => (
<<<<<<< HEAD
        <div><Guesting guest={guests[key]} key={key} deleteBooking={deleteBooking} /></div>
=======
        <li><Guest guest={guests[key]} key={key} deleteBooking={deleteBooking} /></li>
>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e
        ))
      }
    </div>
  );
<<<<<<< HEAD
} else {
  return (<div> Sorry {currentUser.username} you have no bookings.</div>)
}
=======

>>>>>>> e4941b82c680c0d74294ceb469ed7ba97c52008e


}

export default Guests;
