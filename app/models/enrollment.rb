class Enrollment < ApplicationRecord
  has_many :students

  validates :location, presence: true
  validates :schedule, presence: true
  validates :student_limit, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def self.list_data
    all.map { |enrollment| enrollment_hash(enrollment, "en") }.to_json
  end

  def self.list_library_data(location, locale)
    all.where(location:).order(:schedule).map { |enrollment| enrollment_hash(enrollment, locale) }.to_json 
  end

  def self.enrollment_detail(enrollment_id, locale)
    enrollment = find_by(id: enrollment_id.to_i)
    return nil unless enrollment

    enrollment_hash(enrollment, locale).to_json
  end

  def formatted_date(locale)
    if locale == "en"
      schedule.in_time_zone('Mountain Time (US & Canada)').strftime("%A, %B #{schedule.in_time_zone('Mountain Time (US & Canada)').day.ordinalize}")
    elsif locale == "ar"
      I18n.with_locale("ar") {I18n.l(schedule.in_time_zone('Mountain Time (US & Canada)').to_date, format: :default)}.tr("0-9", "٠-٩")
    else
      I18n.with_locale(locale) {I18n.l(schedule.in_time_zone('Mountain Time (US & Canada)').to_date, format: :default)}
    end
  end
  
  def formatted_time(locale)
    schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p')
  end

  def student_limit_check
    students.length < student_limit
  end

  def self.enrollment_hash(enrollment, locale)
    {
      id: enrollment.id,
      location: enrollment.location,
      date: enrollment.formatted_date(locale),
      time: enrollment.formatted_time(locale),
      student_limit: enrollment.student_limit,
      students: enrollment.students.count
    }
  end
end
