class Student < ApplicationRecord
  belongs_to :enrollment

  validates :first_name, :last_name, :language, presence: true, length: {maximum: 100}
  validates :email, length: {maximum: 100}, format: { with: URI::MailTo::EMAIL_REGEXP }, if: :email_present?
  validates :phone, phone: { possible: true, allow_blank: true, countries: :us }, if: :phone_present?
  validate :email_or_phone_present

  before_save :format_phone

  def self.list_data
    students = all.select(:id, :first_name, :last_name, :email, :phone, :language, :level, :interpretation, :enrollment_id)
    students.to_json
  end

  def self.csv_data
    students = all.select(:id, :first_name, :last_name, :email, :phone, :language, :level, :interpretation, :enrollment_id)
    students.to_json
  end

  private

  def format_phone
    self.phone = Phonelib.parse(phone).e164
  end

  def email_or_phone_present
    return unless [email, phone].none?(&:present?)

    errors.add(:base, 'Either phone or email must be present')
  end

  def email_present?
    email.present?
  end

  def phone_present?
    phone.present?
  end
end
