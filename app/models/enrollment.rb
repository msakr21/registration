class Enrollment < ApplicationRecord
  has_many :students

  def self.list_data
    all.map { |enrollment| enrollment_hash(enrollment) }.to_json
  end

  def self.enrollment_detail(enrollment_id)
    enrollment = find_by(id: enrollment_id.to_i)
    return nil unless enrollment

    enrollment_hash(enrollment).to_json
  end

  def formatted_date
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%m/%d/%Y')
  end

  def formatted_time
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p')
  end

  def self.enrollment_hash(enrollment)
    {
      id: enrollment.id,
      location: enrollment.location,
      date: enrollment.formatted_date,
      time: enrollment.formatted_time,
      student_limit: enrollment.student_limit,
      students: enrollment.students.count
    }
  end
end
