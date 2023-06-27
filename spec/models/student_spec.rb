require 'rails_helper'

RSpec.describe Student, type: :model do
  describe 'relationships' do
    it { should belong_to :enrollment }
  end

  describe '#list_data' do
    let!(:eloise_may) { create(:enrollment, location: 'Eloise May') }
    let!(:sheridan) { create(:enrollment, location: 'Sheridan') }

    let!(:bryan) { create(:student, enrollment: sheridan, first_name: 'Bryan', last_name: 'Keener', email: 'bryan.keener@persona.com', phone: '5555555555', language: 'English') }
    let!(:mufasa) { create(:student, enrollment: sheridan, first_name: 'Mufasa', last_name: 'Skar', email: 'mufasa.skar@persona.com', phone: '7777777777', language: 'Aramaic') }

    it 'returns a list of students as a JSON collection' do
      expect(Student.list_data).to eq([student_as_json(bryan), student_as_json(mufasa)].to_json)
    end
  end

  def student_as_json(student)
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
