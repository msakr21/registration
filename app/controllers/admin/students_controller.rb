class Admin::StudentsController < ApplicationController
  before_action :set_enrollment, only: [:create]
  before_action :set_student, only: [:update, :destroy]
  before_action :authenticate_user!

  def new
    @enrollment_id = params[:enrollment_id]
    @errors = params[:errors].to_json
    @student_params = params[:student_params].to_json
  end

  def create
    student = create_student
    @errors = student.errors.messages
    redirect_to 
    case @errors
    when {}
      redirect_to admin_enrollment_path(@enrollment)
    else
      redirect_to new_admin_enrollment_student_path(errors: @errors, student_params: student_params, enrollment_id: @enrollment)
    end
  end

  def update
    update_student
    redirect_to admin_enrollment_path(@student.enrollment_id)
  end

  def destroy
    @student.destroy
    redirect_to admin_enrollment_path(@student.enrollment_id)
  end

  private

  def set_enrollment
    @enrollment = Enrollment.find(params[:enrollment_id])
  end

  def set_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.permit(:first_name, :last_name, :email, :phone, :language, :level, :interpretation)
  end

  def create_student
    @enrollment.students.create(student_params)
  end

  def update_student
    @student.update!(student_params)
  end
end
