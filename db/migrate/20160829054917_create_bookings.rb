class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer  "guest_id",  null: false
      t.integer  "host_id",     null: false
      t.datetime "start_date", null: false
      t.datetime "end_date",   null: false
      t.timestamps
    end
  end
end
