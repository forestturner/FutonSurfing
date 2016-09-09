http://www.futonsurfing.site/


# FutonSurfing

[FutonSurfing.site](http://www.futonsurfing.site)

FutonSurfing is a full-stack web app inspired by couchsurfing with a backend managed by Ruby on Rails with a PostgreSQL database. The frontend was developed with React and Redux, along with googleapis for the search and map features.

## Features

### Single-page app

FutonSurfing uses react and redux to navigate throughout the site without actually changing the site, for a smooth experience.
### User authentication and signup
The authentication process is built from the ground up on the backend utilizing bcrypt. There is a redux cycle that manages that authentication on the frontend. When signing up,  logging in or logging out, the redux cycle makes ajax calls to rails on the backend and rails responses with json objects rendered by jbuilder. Users may edit their profile. Cloudinary is utilized so that users may upload their own profile pictures. Google places api is used so that when users enter their location, the latitude and longitude is extracted to put them on the search map.


### Search locations for users
Google places api and google maps api is used so that users can search for other users to stay with by either typing the location they wish to visit in the search bar, or by scrolling through the map to see different locations.


### Bookings Futons
Users can be reserve futons on other user's futon show pages. A user has to logged in to make a booking. This is accomplished with rails validation, which is then loaded into an "errors" state on the store. Users can disallow other people from reserving their futon by changing their settings in the dashboard page.


### Future features
Features to add include a member search, a friends feature, the ability to send messages to other users, pagination on the location search page, a responsive design for mobile devices, different styling for different eras, and the ability to add photos other than the profile pic.
