class StudentsController < ApplicationController
  before_action :find_enrollment, only: [:new, :create]
  include ApplicationHelper
  def new
    @locale = params[:locale] || set_locale
    @location = params[:location]
    redirect_to "/#{@locale}/enrollments?location=#{@location}" unless @enrollment.student_limit_check
    @enrollment_id = params[:enrollment_id]
    @errors = params[:errors].to_json
    @student_params = params[:student_params].to_json
    @mobile = mobile_device?
  end

  def create
    locale = params[:locale] || set_locale
    student = Student.find_by(first_name: params[:first_name].strip.downcase.capitalize, last_name: params[:last_name].strip.downcase.capitalize, email: params[:email].strip.downcase, phone: Phonelib.parse(params[:phone]).e164)
    if @enrollment.student_limit_check && !student
      params[:first_name] = params[:first_name].strip.downcase.capitalize
      params[:last_name] = params[:last_name].strip.downcase.capitalize
      params[:email] = params[:email].strip.downcase
      student = @enrollment.students.create(student_params)
      @errors = student.errors.messages
      case @errors
      when {}
        redirect_to confirmation_page_path(student, @enrollment, locale)
      else
        redirect_to new_enrollment_student_path(errors: @errors, student_params: student_params, locale: locale)
      end
    elsif @enrollment.student_limit_check && student
      redirect_to duplicate_page_path(student, student.enrollment, locale)
    else
      redirect_to locale_root_path(error_adding: true, locale: locale)
    end
  end

  private

  def find_enrollment
    @enrollment = Enrollment.find(params[:enrollment_id])
  end

  def student_params
    params.permit(:first_name, :last_name, :email, :phone, :language, :level, :interpretation)
  end

  def confirmation_page_path(student, enrollment, locale)
    confirmation_path(name: student.first_name, time: enrollment.formatted_time(enrollment.start_time, locale),
                      location: enrollment.location, date: enrollment.formatted_date(locale), locale: locale)
  end

  def duplicate_page_path(student, enrollment, locale)
    duplicate_path(name: student.first_name, time: enrollment.formatted_time(enrollment.start_time, locale),
                      location: enrollment.location, date: enrollment.formatted_date(locale), locale: locale)
  end
end
