# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160905183207) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "guest_id",   null: false
    t.integer  "host_id",    null: false
    t.datetime "start_date", null: false
    t.datetime "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "futons", force: :cascade do |t|
    t.string   "address",       null: false
    t.float    "lat",           null: false
    t.float    "lng",           null: false
    t.text     "description",   null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "futon_img_url"
  end

  create_table "hosts", force: :cascade do |t|
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.text     "description", null: false
    t.string   "firstname",   null: false
    t.string   "lastname",    null: false
    t.string   "email",       null: false
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "references", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "host_id",     null: false
    t.text     "description", null: false
    t.integer  "rating",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "firstname",       null: false
    t.string   "lastname",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email",           null: false
    t.string   "profile_img_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "username"
    t.string   "description"
  end

end
