require 'rails_helper'

RSpec.describe Student do
  describe 'relationships' do
    it { should belong_to :enrollment }
  end

  describe 'validations' do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:language) }
    it { should validate_presence_of(:phone) }

    context 'when email is valid' do
      it 'is valid' do
        student = build(:student, email: 'bob@aol.com')

        expect(student).to be_valid
      end
    end

    context 'when email is invalid' do
      it 'is invalid' do
        student = build(:student, email: 'bademail')

        expect(student).not_to be_valid
        expect { student.save! }.to raise_error(ActiveRecord::RecordInvalid, 'Validation failed: Email is invalid')
      end
    end

    context 'when phone number is valid (US number)' do
      it 'is valid' do
        student = build(:student, phone: '(555) 555-5555')

        expect(student).to be_valid
      end
    end

    context 'when phone number is invalid' do
      it 'is invalid' do
        student = build(:student, phone: '123')

        expect(student).not_to be_valid
        expect { student.save! }.to raise_error(ActiveRecord::RecordInvalid, 'Validation failed: Phone is invalid')
      end
    end

    context 'when phone number is not a US number' do
      it 'is invalid' do
        student = build(:student, phone: '+40 800 672 400')

        expect(student).not_to be_valid
        expect { student.save! }.to raise_error(ActiveRecord::RecordInvalid, 'Validation failed: Phone is invalid')
      end
    end

    context 'when either email or phone is present' do
      it 'is valid' do
        student_with_email = build(:student, phone: nil)
        student_with_phone = build(:student, email: nil)

        expect(student_with_email).to be_valid
        expect(student_with_phone).to be_valid
      end
    end

    context 'when both email and phone are not present' do
      it 'is invalid' do
        student = build(:student, email: nil, phone: nil)

        expect(student).not_to be_valid
        expect do
          student.save!
        end.to raise_error(ActiveRecord::RecordInvalid, 'Validation failed: Either phone or email must be present')
      end
    end
  end

  describe '#list_data' do
    let!(:eloise_may) { create(:enrollment, location: 'Eloise May') }
    let!(:sheridan) { create(:enrollment, location: 'Sheridan') }

    let!(:bryan) { create(:student, enrollment: sheridan) }
    let!(:mufasa) { create(:student, enrollment: sheridan) }

    it 'returns a list of students as a JSON collection' do
      expect(JSON.parse(Student.list_data)).to contain_exactly(student_hash(bryan), student_hash(mufasa))
    end
  end

  def student_hash(student)
    {
      'id' => student.id,
      'first_name' => student.first_name,
      'last_name' => student.last_name,
      'email' => student.email,
      'phone' => student.phone,
      'language' => student.language
    }
  end
end
