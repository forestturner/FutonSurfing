class ChangeHostIDtoFutonId < ActiveRecord::Migration[5.0]
  def change
    remove_column :bookings, :host_id
    add_column :bookings, :futon_id, :integer
  end
end
