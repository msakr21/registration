class Admin::EnrollmentsController < ApplicationController
  before_action :set_enrollment, only: [:edit, :update, :destroy]

  def index
    @enrollments = Enrollment.list_data
    @delete_confirmation = params[:confirm_delete]
  end

  def new; end

  def show
    @enrollment = Enrollment.enrollment_detail(params[:id])
    @students = Enrollment.find(params[:id]).students.list_data
  end

  def edit
    @enrollment_id = @enrollment.id
    @location = @enrollment.location
    @schedule = @enrollment.schedule
    @students = @enrollment.student_limit
  end

  def create
    Enrollment.create!(enrollment_params)
    redirect_to '/admin/enrollments'
  end

  def update
    @enrollment.update!(enrollment_params)
    redirect_to '/admin/enrollments'
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
    params.permit(:location, :schedule, :student_limit)
  end
end
