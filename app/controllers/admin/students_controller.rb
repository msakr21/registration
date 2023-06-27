class Admin::StudentsController < ApplicationController
  before_action :set_enrollment, only: [:create]
  before_action :set_student, only: [:update, :destroy]

  def new
    @enrollment_id = params[:enrollment_id]
  end

  def create
    create_student
    redirect_to admin_enrollments_path
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
    params.permit(:first_name, :last_name, :email, :phone, :language)
  end

  def create_student
    @enrollment.students.create!(student_params)
  end

  def update_student
    @student.update!(student_params)
  end
end
