require 'rails_helper'

RSpec.describe Enrollment do
  describe 'relationships' do
    it { should have_many :students }
  end

  describe 'methods' do
    let!(:eloise_may) { create(:enrollment, schedule: DateTime.parse('2030-06-11T15:00:24.000Z'), location: 'Eloise May') }
    let!(:sheridan) { create(:enrollment, schedule: DateTime.parse('2030-06-12T15:00:24.000Z'), location: 'Sheridan', student_limit: 10) }
    let!(:students) { create_list(:student, 2, enrollment: sheridan) }

    describe '#list_data' do
      it 'returns a list of enrollments as a JSON collection' do
        expect(Enrollment.list_data).to eq([
          { id: eloise_may.id, location: eloise_may.location, date: '06/11/2030', time: '09:00 AM', student_limit: 30, students: 0 },
          { id: sheridan.id, location: sheridan.location, date: '06/12/2030', time: '09:00 AM', student_limit: 10, students: 2 }
        ].to_json)
      end
    end

    describe '#enrollment_detail' do
      context 'when a valid id is provided' do
        it 'returns the details of a single enrollment' do
          expect(Enrollment.enrollment_detail(eloise_may.id)).to eq(
            { id: eloise_may.id, location: eloise_may.location, date: '06/11/2030', time: '09:00 AM', student_limit: 30, students: 0 }.to_json
          )
        end
      end

      context 'when an invalid id is provided' do
        it 'returns nil' do
          expect(Enrollment.enrollment_detail(-1)).to be_nil
        end
      end
    end

    describe '#formatted_date' do
      it 'returns the date in mm/dd/yyyy format from the schedule Datetime attribute of enrollment' do
        expect(eloise_may.formatted_date).to eq('06/11/2030')
        expect(sheridan.formatted_date).to eq('06/12/2030')
      end
    end

    describe '#formatted_time' do
      it 'returns the time in hh:mm meridiem format from the schedule Datetime attribute of enrollment' do
        expect(eloise_may.formatted_time).to eq('09:00 AM')
        expect(sheridan.formatted_time).to eq('09:00 AM')
      end
    end
  end
end
