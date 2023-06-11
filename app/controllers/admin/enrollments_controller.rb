class Admin::EnrollmentsController < ApplicationController
  def index
    @enrollments = Enrollment.list_data
  end
  
  def new
  end

  def create
    Enrollment.create(location: params[:location], schedule: params[:schedule], student_limit: params[:student_limit])
    redirect_to '/enrollments'
  end
end