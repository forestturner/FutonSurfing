class CreateFutons < ActiveRecord::Migration[5.0]
  def change
    create_table :futons do |t|
      t.string   "address",      null: false
      t.float    "lat",          null: false
      t.float    "lng",          null: false
      t.text     "description",  null: false
      t.integer  "user_id",      null: false
      t.timestamps
    end
  end
end
