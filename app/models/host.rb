# == Schema Information
#
# Table name: hosts
#
#  id          :integer          not null, primary key
#  lat         :float            not null
#  lng         :float            not null
#  description :text             not null
#  firstname   :string           not null
#  lastname    :string           not null
#  email       :string           not null
#  image_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Host < ApplicationRecord
end
