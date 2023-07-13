class StudentsController < ApplicationController
  def new
    enrollment = Enrollment.find(params[:enrollment_id])
    redirect_to controller: 'enrollments', action: 'index' unless enrollment.student_limit_check
    @enrollment_id = params[:enrollment_id]
  end

  def create
    enrollment = Enrollment.find(params[:enrollment_id])
    if enrollment.student_limit_check
      student = enrollment.students.create!(
        first_name: params[:first_name],
        last_name: params[:last_name],
        email: params[:email],
        phone: params[:phone],
        language: params[:language]
      )
      redirect_to controller: 'pages', action: 'confirmation', name: student.first_name,
                  time: enrollment.formatted_time, date: enrollment.formatted_date, location: enrollment.location
    else
      redirect_to controller: 'enrollments', action: 'index', error_adding: true
    end
  end
end
