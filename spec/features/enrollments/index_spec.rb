require 'rails_helper'

RSpec.describe 'enrollments index page', type: :feature do
  describe 'when I visit /enrollments' do
    before :each do
      @eloise_may = Enrollment.create(location: 'Eloise May', schedule: DateTime.parse('2023-06-11T05:00:24.000Z'), student_limit: 30)
    end

    it 'I see a list of enrollments', driver: :selenium_chrome, js: true do
      visit '/enrollments'

      expect(page).to have_content('Location: Eloise May')
    end
  end
end
