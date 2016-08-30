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

### Futons

- `GET /api/futons`
- `POST /api/futons`
- `GET /api/futons/:id`
- `PATCH /api/futons/:id`
- `DELETE /api/futons/:id`

### Profile

- `POST /api/profile`
- `GET /api/profile/:id`
- `PATCH /api/profile/:id`
- `DELETE /api/profile/:id`


### Bookings

- `GET /api/futons/:futon_Id/bookings`
- `POST /api/futons/:futon_Id/bookings`
- `PATCH /api/bookings/:booking_id`
- `DELETE /api/bookings/:booking_id`

### Refernces
- A futon's references will be included in the futon show template
- `POST /api/futons/:futon_Id/references`
- `DELETE /api/futons/:futon_Id/references/:reference_Id`
