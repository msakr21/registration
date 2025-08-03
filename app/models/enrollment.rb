class Enrollment < ApplicationRecord
  has_many :students
  validates :location, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :student_limit, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def self.list_data(locale="en")
    all.order(:start_time).map { |enrollment| enrollment_hash(enrollment, locale) }.to_json
  end

  def self.list_library_data(location, locale="en")
    all.where(location:).order(:start_time).map { |enrollment| enrollment_hash(enrollment, locale) }.to_json 
  end

  def self.enrollment_detail(enrollment_id, locale)
    enrollment = find_by(id: enrollment_id.to_i)
    return nil unless enrollment

    enrollment_hash(enrollment, locale).to_json
  end

  def formatted_date(locale)
    if locale == "en" || locale == :en
      start_time.in_time_zone('Mountain Time (US & Canada)').strftime("%A, %B #{start_time.in_time_zone('Mountain Time (US & Canada)').day.ordinalize}")
    elsif locale == "ar" || locale == :ar
      I18n.with_locale("ar") {I18n.l(start_time.in_time_zone('Mountain Time (US & Canada)').to_date, format: :default)}.tr("0-9", "٠-٩")
    else
      I18n.with_locale(locale) {I18n.l(start_time.in_time_zone('Mountain Time (US & Canada)').to_date, format: :default)}
    end
  end
  
  def formatted_time(time, locale)
    if locale == "ar" || locale == :ar
      I18n.with_locale("ar") {I18n.l(time.in_time_zone('Mountain Time (US & Canada)').to_time, format: :default)}.tr("0-9", "٠-٩")
    else
      I18n.with_locale(locale) {I18n.l(time.in_time_zone('Mountain Time (US & Canada)').to_time, format: :default)}
    end
  end

  def student_limit_check
    students.length < student_limit
  end

  def self.enrollment_hash(enrollment, locale)
    {
      id: enrollment.id,
      location: enrollment.location,
      date: enrollment.formatted_date(locale),
      start_time: enrollment.formatted_time(enrollment.start_time, locale),
      end_time: enrollment.formatted_time(enrollment.end_time, locale),
      student_limit: enrollment.student_limit,
      students: enrollment.students.count
    }
  end

  def self.branch_capacity_full?(location)
    branch_mapper = {
      'may' => "Eloise May",
      'smoky' => "Smoky Hill",
      'sheridan' => "Sheridan" 
    }
    enrollments_full_counter = 0
    enrollments = all.where(location: branch_mapper[location])
    enrollments.each do |enrollment|
      enrollments_full_counter += 1 if enrollment.students.length >= enrollment.student_limit
    end
    return true if enrollments.length == enrollments_full_counter
    false
  end
end
