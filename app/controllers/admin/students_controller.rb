class Admin::StudentsController < ApplicationController
  def new
    @enrollment_id = params[:enrollment_id]
  end

  def create
    enrollment = Enrollment.find(params[:enrollment_id])
    enrollment.students.create!(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email],
      phone: params[:phone],
      language: params[:language]
    )
    redirect_to '/admin/enrollments'
  end

  def update
    student = Student.find(params[:id])
    student.update!(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], phone: params[:phone], language: params[:language])
    redirect_to "/admin/enrollments/#{params[:enrollment_id]}"
  end

  def destroy
    Student.destroy(params[:id])
    redirect_to controller: 'admin/enrollments', action: 'show', id: params[:enrollment_id]
  end
end
