class CreateReferences < ActiveRecord::Migration[5.0]
  def change
    create_table :references do |t|
      t.integer  "user_id",     null: false
      t.integer  "host_id",      null: false
      t.text     "description", null: false
      t.integer  "rating",      null: false
      t.timestamps
    end
  end
end
