# == Schema Information
#
# Table name: references
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  host_id     :integer          not null
#  description :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reference < ApplicationRecord
end
