class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string   "firstname",       null: false
      t.string   "lastname",        null: false
      t.string   "password_digest", null: false
      t.string   "session_token",   null: false
      t.string   "email",           null: false
      t.string   "profile_img_url"
      t.timestamps
    end
  end
end
