class ChangeBackToHosts < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :host_id , :integer
    remove_column :bookings, :futon_id
  end
end
