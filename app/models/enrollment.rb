class Enrollment < ApplicationRecord
  has_many :students

  def self.list_data
    enrollments = all.map do |enrollment|
      {
        id: enrollment.id,
        location: enrollment.location,
        date: enrollment.formatted_date,
        time: enrollment.formatted_time,
        student_limit: enrollment.student_limit,
        students: enrollment.students.count
      }
    end

    enrollments.to_json
  end

  def self.enrollment_detail(enrollment_id)
    enrollment = find(enrollment_id.to_i)

    {
      id: enrollment.id,
      location: enrollment.location,
      date: enrollment.formatted_date,
      time: enrollment.formatted_time,
      student_limit: enrollment.student_limit,
      students: enrollment.students.count
    }.to_json
  end

  def formatted_date
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%m/%d/%Y')
  end

  def formatted_time
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p')
  end
end
