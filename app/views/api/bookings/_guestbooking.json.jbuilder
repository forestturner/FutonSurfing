json.extract! guestbooking, :id, :guest_id, :futon_id, :start_date, :end_date
# create_table "bookings", force: :cascade do |t|
#   t.integer  "guest_id",   null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.date     "start_date"
#   t.date     "end_date"
#   t.integer  "futon_id"
