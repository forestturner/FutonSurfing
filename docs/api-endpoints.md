# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `POST /session`
- `DELETE /session`
- `GET /session/new`

### Hosts

- `GET /api/hosts`
- `POST /api/hosts`
- `GET /api/hosts/:id`
- `PATCH /api/hosts/:id`
- `DELETE /api/hosts/:id`

### Bookings

- `GET /api/hosts/:host_Id/bookings`
- `POST /api/hosts/:host_Id/bookings`
- `PATCH /api/bookings/:booking_id`
- `DELETE /api/bookings/:booking_id`

### Refernces
- A host's references will be included in the host show template
- `POST /api/hosts/:host_Id/references`
- `DELETE /api/hosts/:host_Id/references/:reference_Id`
