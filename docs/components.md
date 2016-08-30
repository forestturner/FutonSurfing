## Component Hierarchy

* **App**
  * FutonForm
  * FutonMap
  * FutonShow
    * BookingContainer
     * BookingButton
     * BookingShow
     * BookingForm
  * Search
  * sessionForm
  * UserProfile




## Routes

* **component:** `Root` **path:** `/`
  * **component:** `FutonShow` **path:** `futon_show`
    * **component:** `BookingContainer` **path:** `futon_show/booking_container`
      * **component:** `BookingShow` **path:** `futon_show/booking_show`
      * **component:** `BookingButton` **path:** `futon_show/booking_button`
      * **component:** `BookingForm` **path:** `futon_show/booking_form`
  * **component:** `Search` **path:** `search`
  * **component:** `sessiongForm` **path:** `session_form`
  * **component:** `UserProfile` **path:** `users/:userId`
