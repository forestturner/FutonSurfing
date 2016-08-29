class CreateHosts < ActiveRecord::Migration[5.0]
  def change
    create_table :hosts do |t|
      t.float    "lat",          null: false
      t.float    "lng",          null: false
      t.text     "description",  null: false
      t.string   "firstname",    null: false
      t.string   "lastname",     null: false
      t.string   "email",        null: false
      t.string   "image_url"
      t.timestamps
    end
  end
end
