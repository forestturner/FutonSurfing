class Futon < ApplicationRecord

  validates :address, :lat, :lng, :description, :user_id, presence: true
  belongs_to :owner, class_name: "User"

end


# create_table "futons", force: :cascade do |t|
#   t.string   "address",     null: false
#   t.float    "lat",         null: false
#   t.float    "lng",         null: false
#   t.text     "description", null: false
#   t.integer  "user_id",     null: false
#   t.datetime "created_at",  null: false
#   t.datetime "updated_at",  null: false
# end
