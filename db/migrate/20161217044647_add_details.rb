class AddDetails < ActiveRecord::Migration[5.0]
  def change
    add_column :futons, :futon_img_details , :string
  end
end
