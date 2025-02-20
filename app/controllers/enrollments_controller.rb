class EnrollmentsController < ApplicationController
  def index
    locale = params[:locale]
    @enrollments = Enrollment.list_data
    @may_enrollments = Enrollment.list_library_data('Eloise May', locale)
    @sheridan_enrollments = Enrollment.list_library_data('Sheridan', locale)
    @smoky_enrollments = Enrollment.list_library_data('Smoky Hill', locale)
    @error_adding = params[:error_adding]
  end
end
