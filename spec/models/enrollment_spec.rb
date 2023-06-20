require 'rails_helper'

RSpec.describe Enrollment, type: :model do
  describe 'relationships' do
    it { should have_many :students }
  end

  describe 'methods' do
    describe '#list_data' do
      let!(:eloise_may) { Enrollment.create!(location: 'Eloise May', schedule: DateTime.parse('2030-06-11T15:00:24.000Z'), student_limit: 30) }
      let!(:sheridan) { Enrollment.create!(location: 'Sheridan', schedule: DateTime.parse('2030-06-12T15:00:24.000Z'), student_limit: 10) }

      before :each do
        sheridan.students.create!(first_name: 'Bryan', last_name: 'Keener', email: 'bryan.keener@persona.com', phone: '5555555555')
      end

      it 'returns a list of enrollments as a JSON collection' do
        expect(Enrollment.list_data).to eq([{ "id": eloise_may.id, "location": eloise_may.location, "date": "06/11/2030", "time": "09:00 AM", "student_limit": 30, "students": 0 }, { "id": sheridan.id, "location": sheridan.location, "date": "06/12/2030", "time": "09:00 AM", "student_limit": 10, "students": 1 }].to_json)
      end
    end
  end
end
