require 'rails_helper'

RSpec.describe Student, type: :model do
  describe 'relationships' do
    it { should belong_to :enrollment}
  end
end