class Enrollment < ApplicationRecord
  has_many :students

  def self.list_data
    enrollments = all.map do |enrollment|
      {
        id: enrollment.id,
        location: enrollment.location,
        date: enrollment.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%m/%d/%Y'),
        time: enrollment.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p'),
        student_limit: enrollment.student_limit,
        students: enrollment.students.length
      }
    end

    enrollments.to_json
  end

  def self.enrollment_detail(enrollment_id)
    enrollment = find(enrollment_id.to_i)
    {
      id: enrollment.id,
      location: enrollment.location,
      date: enrollment.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%m/%d/%Y'),
      time: enrollment.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p'),
      student_limit: enrollment.student_limit,
      students: enrollment.students.length
    }.to_json
  end
end
