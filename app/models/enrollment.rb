class Enrollment < ApplicationRecord
  has_many :students

  validates :location, presence: true
  validates :schedule, presence: true
  validates :student_limit, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def self.list_data
    all.map { |enrollment| enrollment_hash(enrollment) }.to_json
  end

  def self.list_library_data(location)
    all.where(location:).order(:schedule).map { |enrollment| enrollment_hash(enrollment) }.to_json 
  end

  def self.enrollment_detail(enrollment_id)
    enrollment = find_by(id: enrollment_id.to_i)
    return nil unless enrollment

    enrollment_hash(enrollment).to_json
  end

  def formatted_date
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime("%A, %B #{schedule.in_time_zone('Mountain Time (US & Canada)').day.ordinalize}")
  end
  
  def formatted_time
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p')
  end

  def student_limit_check
    students.length < student_limit
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
