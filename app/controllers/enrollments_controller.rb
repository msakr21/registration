class EnrollmentsController < ApplicationController 
  def index
    enrollments_array = Enrollment.all.map do |enrollment|
      { id: enrollment.id, schedule: enrollment.schedule, location: enrollment.location }
    end
    @enrollments = enrollments_array.to_json
  end

  def create
    Enrollment.create(location: params[:location], schedule: params[:schedule], student_limit: params[:student_limit])
    redirect_to '/enrollments'
  end
end
