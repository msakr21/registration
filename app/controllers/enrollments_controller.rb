class EnrollmentsController < ApplicationController 
  def index
    @enrollments = Enrollment.list_data
  end
end
