class StudentsController < ApplicationController
  before_action :find_enrollment, only: [:new, :create]

  def new
    redirect_to enrollments_path unless @enrollment.student_limit_check
    @enrollment_id = params[:enrollment_id]
    @errors = params[:errors].to_json
    @student_params = params[:student_params].to_json
    # binding.pry
  end

  def create
    if @enrollment.student_limit_check
      student = @enrollment.students.create(student_params)
      @errors = student.errors.messages
      case @errors
      when {}
        redirect_to confirmation_page_path(student, @enrollment)
      else
        redirect_to new_enrollment_student_path(errors: @errors, student_params: student_params)
      end
    else
      redirect_to enrollments_path(error_adding: true)
    end
  end

  private

  def find_enrollment
    @enrollment = Enrollment.find(params[:enrollment_id])
  end

  def student_params
    params.permit(:first_name, :last_name, :email, :phone, :language)
  end

  def confirmation_page_path(student, enrollment)
    confirmation_path(name: student.first_name, time: enrollment.formatted_time,
                      date: enrollment.formatted_date, location: enrollment.location)
  end
end
