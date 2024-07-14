require 'rails_helper'

RSpec.describe Enrollment do
  describe 'relationships' do
    it { should have_many :students }
  end

  describe 'validations' do
    it { should validate_presence_of :location }
    it { should validate_presence_of :schedule }
    it { should validate_numericality_of(:student_limit).only_integer.is_greater_than_or_equal_to(0) }
  end

  describe 'methods' do
    let!(:eloise_may) do
      create(:enrollment, schedule: DateTime.parse('2030-06-11T15:00:24.000Z'), location: 'Eloise May')
    end
    let!(:sheridan) do
      create(:enrollment, schedule: DateTime.parse('2030-06-12T15:00:24.000Z'), location: 'Sheridan', student_limit: 10)
    end
    let!(:students_sheridan) { create_list(:student, 2, enrollment: sheridan) }

    describe '#list_data' do
      it 'returns a list of enrollments as a JSON collection' do
        expect(JSON.parse(Enrollment.list_data)).to contain_exactly(
          { 'id' => eloise_may.id, 'location' => eloise_may.location, 'date' => 'Tuesday, June 11th', 'time' => '09:00 AM',
            'student_limit' => 30, 'students' => 0 }, { 'id' => sheridan.id, 'location' => sheridan.location, 'date' => 'Wednesday, June 12th', 'time' => '09:00 AM', 'student_limit' => 10, 'students' => 2 }
        )
      end
    end

    describe '#enrollment_detail' do
      context 'when a valid id is provided' do
        it 'returns the details of a single enrollment' do
          expect(JSON.parse(Enrollment.enrollment_detail(eloise_may.id))).to eq(
            { 'id' => eloise_may.id, 'location' => eloise_may.location, 'date' => 'Tuesday, June 11th', 'time' => '09:00 AM',
              'student_limit' => 30, 'students' => 0 }
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
        expect(eloise_may.formatted_date).to eq('Tuesday, June 11th')
        expect(sheridan.formatted_date).to eq('Wednesday, June 12th')
      end
    end

    describe '#formatted_time' do
      it 'returns the time in hh:mm meridiem format from the schedule Datetime attribute of enrollment' do
        expect(eloise_may.formatted_time).to eq('09:00 AM')
        expect(sheridan.formatted_time).to eq('09:00 AM')
      end
    end

    describe '#student_limit_check' do
      let!(:students_may) { create_list(:student, eloise_may.student_limit, enrollment: eloise_may) }

      it 'returns true if number of students is below enrollment student limit and false otherwise' do
        expect(sheridan.student_limit_check).to be(true)
        expect(eloise_may.students.length).to eq(30)
        expect(eloise_may.student_limit_check).to be(false)

        create(:student, enrollment: eloise_may)
        eloise_may.reload
        expect(eloise_may.students.length).to eq(31)
        expect(eloise_may.student_limit_check).to be(false)
      end
    end
  end
end
