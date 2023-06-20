class Admin::StudentsController < ApplicationController
  def new
    @enrollment_id = params[:enrollment_id]
  end

  def create
    enrollment = Enrollment.find(params[:enrollment_id])
    enrollment.students.create!(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], phone: params[:phone])
    redirect_to '/admin/enrollments'
  end
end