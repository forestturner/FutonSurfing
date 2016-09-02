# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: "Jeff", password: "password1", firstname: "jeff", lastname: "turner", email: "mrforest@gmail.com")
User.create(username: "Jeff", password: "password1", firstname: "jeff", lastname: "turner", email: "mrforest@gmail.com")
User.create(username: "Guest", password: "password1", firstname: "Guest", lastname: "Test", email: "GuestTest@gmail.com")
Futon.create(address: "123 clement street San Francisco 94118", lat:"37.7829889",lng: "-122.4627681", description:"very soft", user_id:6)


# create_table "futons", force: :cascade do |t|
#   t.string   "address",     null: false
#   t.float    "lat",         null: false
#   t.float    "lng",         null: false
#   t.text     "description", null: false
#   t.integer  "user_id",     null: false
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end
