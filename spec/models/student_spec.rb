require 'rails_helper'

RSpec.describe Student, type: :model do
  describe 'relationships' do
    it { should belong_to :enrollment }
  end

  describe '#list_data' do
    let!(:eloise_may) { Enrollment.create!(location: 'Eloise May', schedule: DateTime.parse('2030-06-11T15:00:24.000Z'), student_limit: 30) }
    let!(:sheridan) { Enrollment.create!(location: 'Sheridan', schedule: DateTime.parse('2030-06-12T15:00:24.000Z'), student_limit: 10) }

    before :each do
      @bryan = sheridan.students.create!(first_name: 'Bryan', last_name: 'Keener', email: 'bryan.keener@persona.com', phone: '5555555555', language: 'English')
      @mufasa = sheridan.students.create!(first_name: 'Mufasa', last_name: 'Skar', email: 'mufasa.skar@persona.com', phone: '7777777777', language: 'Aramaic')
    end

    it 'returns a list of enrollments as a JSON collection' do
      expect(Student.list_data).to eq([{ id: @bryan.id, first_name: 'Bryan', last_name: 'Keener', email: 'bryan.keener@persona.com', phone: '5555555555', language: 'English'}, {id: @mufasa.id, first_name: 'Mufasa', last_name: 'Skar', email: 'mufasa.skar@persona.com', phone: '7777777777', language: 'Aramaic'}].to_json)
    end
  end
end
