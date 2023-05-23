require 'rails_helper'

RSpec.describe Enrollment, type: :model do
  describe 'relationships' do
    it { should have_many :students }
  end
end