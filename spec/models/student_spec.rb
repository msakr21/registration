require 'rails_helper'

RSpec.describe Student do
  describe 'relationships' do
    it { should belong_to :enrollment }
  end

  describe 'validations' do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:language) }

    it 'is valid with valid email' do
      student = build(:student, email: 'bob@aol.com')
      expect(student).to be_valid
    end

    it 'is invalid with invalid email' do
      student = build(:student, email: 'bademail')
      expect(student).to_not be_valid
    end

    it 'is valid with valid US phone number' do
      student = build(:student, phone: '(555) 555-5555')
      expect(student).to be_valid
    end

    it 'is invalid with invalid phone number' do
      student = build(:student, phone: '123')
      expect(student).to_not be_valid
    end

    it 'is invalid with a non-US number' do
      student = build(:student, phone: '+40 800 672 400')
      expect(student).to_not be_valid
    end

    it 'is valid if either email or phone is present' do
      student_with_email = build(:student, phone: nil)
      student_with_phone = build(:student, email: nil)

      expect(student_with_email).to be_valid
      expect(student_with_phone).to be_valid
    end

    it 'is invalid if both email and phone are not present' do
      student = build(:student, email: nil, phone: nil)
      expect(student).to_not be_valid
    end
  end

  describe '#list_data' do
    let!(:eloise_may) { create(:enrollment, location: 'Eloise May') }
    let!(:sheridan) { create(:enrollment, location: 'Sheridan') }

    let!(:bryan) { create(:student, enrollment: sheridan) }
    let!(:mufasa) { create(:student, enrollment: sheridan) }

    it 'returns a list of students as a JSON collection' do
      expect(Student.list_data).to eq([student_hash(bryan), student_hash(mufasa)].to_json)
    end
  end

  def student_hash(student)
    {
      id: student.id,
      first_name: student.first_name,
      last_name: student.last_name,
      email: student.email,
      phone: student.phone,
      language: student.language
    }
  end
end
