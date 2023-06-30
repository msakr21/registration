class EnrollmentsController < ApplicationController
  def index
    @enrollments = Enrollment.list_data
    @error_adding = params[:error_adding]
  end
end
