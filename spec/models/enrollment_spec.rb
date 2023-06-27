require 'rails_helper'

RSpec.describe Enrollment, type: :model do
  describe 'relationships' do
    it { should have_many :students }
  end

  describe 'methods' do
    let!(:eloise_may) { Enrollment.create!(location: 'Eloise May', schedule: DateTime.parse('2030-06-11T15:00:24.000Z'), student_limit: 30) }
    let!(:sheridan) { Enrollment.create!(location: 'Sheridan', schedule: DateTime.parse('2030-06-12T15:00:24.000Z'), student_limit: 10) }

    before :each do
      sheridan.students.create!(first_name: 'Bryan', last_name: 'Keener', email: 'bryan.keener@persona.com', phone: '5555555555')
    end

    describe '#list_data' do
      it 'returns a list of enrollments as a JSON collection' do
        expect(Enrollment.list_data).to eq([{ "id": eloise_may.id, "location": eloise_may.location, "date": '06/11/2030', "time": '09:00 AM', "student_limit": 30, "students": 0 }, { "id": sheridan.id, "location": sheridan.location, "date": '06/12/2030', "time": '09:00 AM', "student_limit": 10, "students": 1 }].to_json)
      end
    end

    describe '#enrollment_detail' do
      it 'returns the details of a single enrollment' do
        expect(Enrollment.enrollment_detail(eloise_may.id)).to eq({ "id": eloise_may.id, "location": eloise_may.location, "date": '06/11/2030', "time": '09:00 AM', "student_limit": 30, "students": 0 }.to_json)
      end
    end

    describe '#formatted_date' do
      it 'returns the date in mm/dd/yyyy format from the schedule Datetime attribute of enrollment' do
        expect(eloise_may.formatted_date).to eq('06/11/2030')
        expect(sheridan.formatted_date).to eq('06/12/2030')
      end
    end

    describe '#formatted_time' do
      it 'returns the time in hh/mm meridiem format from the schedule Datetime attribute of enrollment' do
        expect(eloise_may.formatted_time).to eq('09:00 AM')
        expect(sheridan.formatted_time).to eq('09:00 AM')
      end
    end
  end
end
