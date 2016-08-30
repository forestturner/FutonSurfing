

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Futon Cycles

### Futon API Request Actions

* `fetchAllFutons`
  0. invoked from `FutonsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/futons` is called.
  0. `receiveAllFutons` is set as the success callback.


* `fetchSingleFuton`
  0. invoked from `FutonDetail` `didMount`/`willReceiveProps`
  0. `GET /api/futons/:id` is called.
  0. `receiveSingleFuton` is set as the success callback.

* `createFuton`
  0. invoked from new futon button `onClick`
  0. `POST /api/futons` is called.
  0. `receiveSingleFuton` is set as the success callback.

* `updateFuton`
  0. invoked from `FutonForm` `onSubmit`
  0. `POST /api/futons` is called.
  0. `receiveSingleFuton` is set as the success callback.

* `destroyFuton`
  0. invoked from delete futon button `onClick`
  0. `DELETE /api/futons/:id` is called.
  0. `removeFuton` is set as the success callback.

### Futons API Response Actions

* `receiveAllFutons`
  0. invoked from an API callback.
  0. `Futon` store updates `_futons` and emits change.

* `receiveSingleFuton`
  0. invoked from an API callback.
  0. `Futon` store updates `_futons[id]` and emits change.

* `removeFuton`
  0. invoked from an API callback.
  0. `Futon` store removes `_futons[id]` and emits change.

### Store Listeners

* `FutonsIndex` component listens to `Futon` store.
* `FutonDetail` component listens to `Futon` store.




## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `FutonSearchBar` `onChange` when there is text
  0. `GET /api/futons` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `FutonSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.

## Booking Cycles

### Booking API Request Actions

* `fetchAllBookings`
  0. invoked from `BookingsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/bookins` is called.
  0. `receiveAllBookings` is set as the success callback.


* `fetchSingleBooking`
  0. invoked from `BookingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/bookings/:id` is called.
  0. `receiveSingleBooking` is set as the success callback.

* `createBooking`
  0. invoked from new booking button `onClick`
  0. `POST /api/bookings` is called.
  0. `receiveSingleBooking` is set as the success callback.


* `destroyBooking`
  0. invoked from delete booking button `onClick`
  0. `DELETE /api/bookings/:id` is called.
  0. `removeBooking` is set as the success callback.

### Bookings API Response Actions

* `receiveAllBookings`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings` and emits change.

* `receiveSingleBooking`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings[id]` and emits change.

* `removeBooking`
  0. invoked from an API callback.
  0. `Booking` store removes `_bookings[id]` and emits change.

### Store Listeners

* `BookingsIndex` component listens to `Booking` store.
* `BookingsForm` component listens to `Booking` store.





# Bonus


## Reference Cycles

### Reference API Request Actions

* `fetchAllReferences`
0. invoked from `ReferencesIndex` `didMount`/`willReceiveProps`
0. `GET /api/reviews` is called.
0. `receiveAllReferences` is set as the success callback.


* `createReference`
0. invoked from new review button `onClick`
0. `POST /api/reviews` is called.
0. `receiveSingleReference` is set as the callback.



* `destroyReference`
0. invoked from delete review button `onClick`
0. `DELETE /api/reviews/:reviewId` is called.
0. `removeReference` is set as the success callback.

### References API Response Actions

* `receiveAllReferences`
0. invoked from an API callback.
0. `Reference` store updates `_reviews` and emits change.

* `receiveSingleReference`
0. invoked from an API callback.
0. `Reference` store updates `_reviews[id]` and emits change.

* `removeReference`
0. invoked from an API callback.
0. `Reference` store removes `_reviews[id]` and emits change.

### Store Listeners

* `ReferencesIndex` component listens to `Reference` Store
* `ReferenceDetail` component listens to `Reference` Store
