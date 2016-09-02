class AddFutonImg < ActiveRecord::Migration[5.0]
  def change
    add_column :futons, :futon_img_url, :string
  end
end
