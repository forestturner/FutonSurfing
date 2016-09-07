class ChangeBackToFutons < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :futon_id , :integer
    remove_column :bookings, :host_id
  end
end
