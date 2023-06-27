require 'rails_helper'

RSpec.describe 'enrollments index page', driver: :selenium_chrome, js: true do
  describe 'when I visit /enrollments' do
    let!(:eloise_may) { create(:enrollment, location: 'Eloise May', schedule: DateTime.parse('2030-06-11T15:00:24.000Z')) }

    before :each do
      visit enrollments_path
    end

    it 'I see a list of enrollments' do
      expect(page).to have_content('Eloise May')
      expect(page).to have_content('06/11/2030')
      expect(page).to have_content('09:00 AM')
      expect(page).to have_link('Register for this session', visible: true)
    end

    it "redirects to the new student page for an enrollment session if an enrollment's Register button is selected" do
      click_link('Register for this session')

      expect(current_path).to eq(new_enrollment_student_path(eloise_may))
    end

    it 'will disable the registration button if number of students registered is equal to student limit' do
      create_list(:student, 30, enrollment: eloise_may)

      visit enrollments_path

      expect(page).to have_css('a.disabled', text: 'Register for this session')
      expect { click_link('Register for this session') }.to raise_error(Selenium::WebDriver::Error::ElementClickInterceptedError)
    end
  end
end
