class AddCapacityEditAddress < ActiveRecord::Migration[5.0]
  def change
    add_column :futons, :capacity, :integer
    add_column :futons, :city, :string
    add_column :futons, :state, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :address, :string
  end
end

  
