class Student < ApplicationRecord
  belongs_to :enrollment

  def self.list_student_data
    all.map do |student|
      {
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        phone: student.phone
      }
    end.to_json
  end
end
