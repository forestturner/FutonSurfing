# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  guest_id   :integer          not null
#  host_id    :integer          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord

    validates :guest_id, :futon_id, :start_date, :end_date, presence: true

   belongs_to :futon

   has_one :host,
     through: :futon,
     source: :user

   belongs_to :guest,
     primary_key: :id,
     foreign_key: :guest_id,
     class_name: :User


end
