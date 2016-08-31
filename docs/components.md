## Component Hierarchy

* **App**
  * sessionFormContainer  
  * UserProfile
  * FutonForm
  * FutonShow
    * BookingContainer
  * FutonMap
  * Search





## Routes

* **component:** `App` **path:** `/`
* **component:** `SearchContainer` 
* **component:** `UserProfileContainer`
  * **component:** `SessionFormContainer` **path:** `./login`
  * **component:** `SessionFormContainer` **path:** `./signup`
  * **component:** `FotonFormContainer` **path:** `/futons/new`
  * **component:** `FotonShowContainer` **path:** `./futons/:benchId"`
    * **component:** `BookingContainer` **path:** `./futons/:benchId"/booking`
