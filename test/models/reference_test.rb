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

require 'test_helper'

class ReferenceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
