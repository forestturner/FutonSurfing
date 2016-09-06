# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: "Guest", password: "password1",city: "San Francisco", firstname: "Edward", lastname: "Norton", email: "EdwardNorton@gmail.com", profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782427/download_1_ae10bn.jpg" )
User.create(username: "Luke", password: "password1",city: "San Francisco", firstname: "Luke", lastname: "Turner", email: "Luke@gmail.com", profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg")
User.create(username: "Tyler", password: "password1",city: "San Francisco", firstname: "Tyler", lastname: "Sky", email: "TylerSky@gmail.com", profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782432/ford_4_yp0v9e.jpg" )
User.create(username: "Bob", password: "password1",city: "San Francisco", firstname: "Bob", lastname: "Singer", email: "BobTurner@gmail.com", profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782442/grid-cell-27637-1389642560-41_bpsw5b.jpg" )
User.create(username: "Forest", password: "password1",city: "San Francisco", firstname: "Forest", lastname: "Smith", email: "Forest.e.Turner@gmail.com", profile_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472782437/Neo_spoon_nem1hp.jpg" )
User.create(username: "Greg", password: "password1",city: "San Francisco", firstname: "Greg", lastname: "GO", email: "GregTest@gmail.com", profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775467/960_nmpq7n.jpg" )
User.create(username: "Marla", password: "password1",city: "San Francisco", firstname: "Marla", lastname: "Black", email: "MarlaTest@gmail.com", profile_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472775331/marla_singer_by_tresdiasdegracia-d6ghfaz_vhtyot.jpg" )

Futon.create(address: "919 Clement St, San Francisco, CA 94118, USA",city: "San Francisco", lat: 37.782602, lng: -122.468987, description:"Great bed for a nap.", user_id:1, futon_img_url: "http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780292/futon_i8kscr.jpg")
Futon.create(address: "658 25th Ave, San Francisco, CA 94121, USA", city: "San Francisco", lat: 37.777175, lng: -122.484436, description:"I am not sure", user_id:2, futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780291/tmg-article_tall_ws6rcn.jpg")
Futon.create(address: "3725 21st St, San Francisco, CA 94114, USA", city: "San Francisco", lat: 37.756005, lng: -122.430878, description:"try it out!", user_id:3, futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780289/555f26ca_original_f0yu0a.webp")
Futon.create(address: "Moraga Steps, San Francisco, CA 94122, USA", city: "San Francisco", lat: 37.756277, lng: -122.472763, description:"horrible for a nap", user_id:4, futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780308/1-screen-shot-2016-07-10-at-11-42-33-am_crnta3.png")
Futon.create(address: "135-149 Cargo Way, San Francisco, CA 94124 USA", city: "San Francisco", lat: 37.744332, lng: -122.383843, description:"great for a nap", user_id:5, futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780287/download_gapork.jpg")
Futon.create(address: "527 Athens St, San Francisco, CA 94112 USA", city: "San Francisco", lat: 37.719623, lng: -122.429848, description:"I love this thing!", user_id:6, futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780290/cayo-espanto-belize-outside-bed_frzmb1.jpg")
Futon.create(address: "1706 Waller St, San Francisco, CA 94117 USA", city: "San Francisco", lat: 37.76849, lng: -122.451821, description:"try it!", user_id:7, futon_img_url:"http://res.cloudinary.com/dnuopy1ir/image/upload/v1472780289/2052641043_5489fbdc48_z_n3hiuw.jpg" )

#
#   create_table "bookings", force: :cascade do |t|
#     t.integer  "guest_id",   null: false
#     t.integer  "host_id",    null: false
#     t.datetime "start_date", null: false
#     t.datetime "end_date",   null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end
#
#   create_table "futons", force: :cascade do |t|
#     t.string   "address",       null: false
#     t.float    "lat",           null: false
#     t.float    "lng",           null: false
#     t.text     "description",   null: false
#     t.integer  "user_id",       null: false
#     t.datetime "created_at",    null: false
#     t.datetime "updated_at",    null: false
#     t.string   "futon_img_url"
#   end
#
#   create_table "hosts", force: :cascade do |t|
#     t.float    "lat",         null: false
#     t.float    "lng",         null: false
#     t.text     "description", null: false
#     t.string   "firstname",   null: false
#     t.string   "lastname",    null: false
#     t.string   "email",       null: false
#     t.string   "image_url"
#     t.datetime "created_at",  null: false
#     t.datetime "updated_at",  null: false
#   end
#
#   create_table "references", force: :cascade do |t|
#     t.integer  "user_id",     null: false
#     t.integer  "host_id",     null: false
#     t.text     "description", null: false
#     t.integer  "rating",      null: false
#     t.datetime "created_at",  null: false
#     t.datetime "updated_at",  null: false
#   end
#
#   create_table "users", force: :cascade do |t|
#     t.string   "firstname",       null: false
#     t.string   "lastname",        null: false
#     t.string   "password_digest", null: false
#     t.string   "session_token",   null: false
#     t.string   "email",           null: false
#     t.string   "profile_img_url"
#     t.datetime "created_at",      null: false
#     t.datetime "updated_at",      null: false
#     t.string   "username"
#   end
#
# end
