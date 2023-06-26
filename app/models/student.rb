class Student < ApplicationRecord
  belongs_to :enrollment

  def self.list_data
    students = all.select(:id, :first_name, :last_name, :email, :phone, :language)
    students.to_json
  end
end
