class EnrollmentsController < ApplicationController
  def index
    @locale = params[:locale] || set_locale
    @may_enrollments = Enrollment.list_library_data('Eloise May', locale)
    @sheridan_enrollments = Enrollment.list_library_data('Sheridan', locale)
    @smoky_enrollments = Enrollment.list_library_data('Smoky Hill', locale)
    @branch = params[:location]
    @branch_capacity_full = Enrollment.branch_capacity_full?(params[:location])
  end
end
