class Admin::EnrollmentsController < ApplicationController
  def index
    @enrollments = Enrollment.list_data
    @delete_confirmation = params[:confirm_delete]
  end

  def new; end

  def show
    @enrollment = Enrollment.find(params[:id]).to_json
    @students = Enrollment.find(params[:id]).students.map do |student|
      {
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        phone: student.phone
      }
    end.to_json
  end

  def edit
    @enrollment_id = params[:id]
    enrollment = Enrollment.find(params[:id])
    @location = enrollment.location
    @schedule = enrollment.schedule
    @students = enrollment.student_limit
  end

  def create
    Enrollment.create(location: params[:location], schedule: params[:schedule], student_limit: params[:student_limit])
    redirect_to '/admin/enrollments'
  end

  def update
    enrollment = Enrollment.find(params[:id])
    enrollment.update!(location: params[:location], schedule: params[:schedule], student_limit: params[:student_limit])
    redirect_to '/admin/enrollments'
  end

  def destroy
    enrollment = Enrollment.find(params[:id])
    if enrollment.students.empty?
      enrollment.destroy
      redirect_to action: 'index', confirm_delete: true
    else
      redirect_to action: 'index', confirm_delete: 'error'
    end
  end
end
