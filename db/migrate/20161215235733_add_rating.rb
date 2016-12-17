class AddRating < ActiveRecord::Migration[5.0]
  def change
    add_column :futons, :name, :string
    add_column :futons, :rating, :integer
  end
end
