class Futon < ApplicationRecord

  validates :address, :lat, :lng, :description, :user_id, presence: true
  belongs_to :user
  has_many :bookings



  def self.in_bounds(bounds)
  self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
end




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
