class EnrollmentsController < ApplicationController
  def index
    @enrollments = Enrollment.list_data
    @may_enrollments = Enrollment.list_library_data("Eloise May")
    @sheridan_enrollments = Enrollment.list_library_data("Sheridan")
    @smoky_enrollments = Enrollment.list_library_data("Smoky Hill")
    @error_adding = params[:error_adding]
  end
end
