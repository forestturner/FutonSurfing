# Phase 4: Profile, Booking, Reference, and ReferenceIndex Components

## Rails
### Models
* Booking
* Reference

### Controllers
* Api::BookingsController (create, destroy, show)
* Api::ReferencesController (create, destroy, show)

### Views

## Flux
### Views (React Components)
* ReferenceIndex
* ReferenceIndexItem
* ReferenceDetail
* ReferenceForm
* BookingIndex
* BookingIndexItem
* BookingDetail
* BookingForm
* Profile

### Stores
* References
* Bookings

### Actions
* ApiActions.receiveAllReferences
* ApiActions.receiveSingleReferences
* ApiActions.removeReference
* ReferenceActions.fetchAllReferences
* ReferenceActions.fetchSingleReference
* ReferenceActions.deleteReference
* ApiActions.receiveAllBookings
* ApiActions.receiveSingleBooking
* ApiActions.removeBooking
* ReferenceActions.fetchAllBookings
* ReferenceActions.fetchSingleBooking
* ReferenceActions.editBooking
* ReferenceActions.deleteBooking


### ApiUtil
* ApiUtil.fetchAllReferences
* ApiUtil.createReference
* ApiUtil.destroyReference
* ApiUtil.fetchAllBookings
* ApiUtil.createBooking
* ApiUtil.editBooking
* ApiUtil.destroyBooking

## Gems/Libraries
