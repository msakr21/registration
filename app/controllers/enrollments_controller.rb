class EnrollmentsController < ApplicationController 
  def index
    enrollments_array = Enrollment.all.map do |enrollment|
      { id: enrollment.id, schedule: enrollment.schedule, location: enrollment.location }
    end
    @enrollments = enrollments_array.to_json
  end
end
