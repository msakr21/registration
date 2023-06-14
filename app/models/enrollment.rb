class Enrollment < ApplicationRecord
  has_many :students

  def self.list_data
    enrollments = all.map do |enrollment|
      { id: enrollment.id, location: enrollment.location, schedule: enrollment.schedule, student_limit: enrollment.student_limit, students: enrollment.students.length }
    end

    enrollments.to_json
  end
end
