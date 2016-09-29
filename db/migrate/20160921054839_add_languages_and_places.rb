class AddLanguagesAndPlaces < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :languages, :string
    add_column :users, :places, :string
  end
end
