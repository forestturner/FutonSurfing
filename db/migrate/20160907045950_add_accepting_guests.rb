class AddAcceptingGuests < ActiveRecord::Migration[5.0]
  def change
    add_column :futons, :accepting_guests, :boolean
  end
end
