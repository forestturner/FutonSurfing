## Component Hierarchy

* **App**
  * Navbar
  * Search
  * HostIndex
    * HostMap
    * HostItem
    * HostFilter
  * HostProfile
    * HostMap
    * ReferenceIndex
      * ReferenceItem
    * ReferenceForm
    * BookingIndex
      * BookingItem
    * BookingForm



## Routes

* **component:** `App` **path:** `/`
  * **component:** `HostIndex` **path:** `index`
  * **component:** `HostIndex` **path:** `hosts`
    * **component:** `HostDetail` **path:** `hosts/:hostId`
  * **component:** `HostListing` **path:** `/editHostlisting`
