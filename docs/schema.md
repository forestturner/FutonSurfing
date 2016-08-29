# Schema Information

## host
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
lat         | float     | not null
lng         | float     | not null
firstname   | string    | not null
lastname    | string    | not null
email       | string    | not null
image_url   | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed


## references
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
host_id     | integer   | not null, foreign key (references hosts), indexed
description | string    | not null
rating      | integer   | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
guest_id    | integer   | not null, foreign key (references guest), indexed
host_id     | integer   | not null, foreign key (references host), indexed
start_date  | datetime  | not null
end_date    | datetime  | not null


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
firstname       | string    | not null
lastname        | string    | not null
email           | string    | not null
profile_img_url | string    | not null
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
