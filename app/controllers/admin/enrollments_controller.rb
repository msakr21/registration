class Admin::EnrollmentsController < ApplicationController
  before_action :set_enrollment, only: [:edit, :update, :destroy]
  before_action :authenticate_user!

  def index
    @enrollments = Enrollment.list_data
    @students = Student.csv_data
    @may_enrollments = Enrollment.list_library_data('Eloise May')
    @sheridan_enrollments = Enrollment.list_library_data('Sheridan')
    @smoky_enrollments = Enrollment.list_library_data('Smoky Hill')
    @delete_confirmation = params[:confirm_delete]
  end

  def show
    @enrollment = Enrollment.enrollment_detail(params[:id], "en")
    @students = Enrollment.find(params[:id]).students.list_data
  end

  def new 
    @enrollments = Enrollment.list_data
    @all_students = Student.csv_data
  end

  def edit
    @enrollments = Enrollment.list_data
    @all_students = Student.csv_data
    @enrollment_id = @enrollment.id
    @location = @enrollment.location
    @start_time = @enrollment.start_time
    @end_time = @enrollment.end_time
    @students = @enrollment.student_limit
  end

  def create
    Enrollment.create!(enrollment_params)
    redirect_to admin_enrollments_path
  end

  def update
    @enrollment.update!(enrollment_params)
    redirect_to admin_enrollments_path
  end

  def destroy
    if @enrollment.students.empty?
      @enrollment.destroy
      redirect_to action: 'index', confirm_delete: true
    else
      redirect_to action: 'index', confirm_delete: 'error'
    end
  end

  private

  def set_enrollment
    @enrollment = Enrollment.find(params[:id])
  end

  def enrollment_params
    params.permit(:location, :start_time, :end_time, :student_limit)
  end
end
