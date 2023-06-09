class StudentsController < ApplicationController
  def new
    @enrollment_id = params[:id].to_s
  end

  def create
    enrollment = Enrollment.find(params[:enrollment_id])
    enrollment.students.create!(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], phone: params[:phone])
    redirect_to '/enrollments'
  end
end
