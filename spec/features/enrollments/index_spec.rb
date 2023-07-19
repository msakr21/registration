require 'rails_helper'

RSpec.describe 'enrollments index page', driver: :selenium_chrome, js: true do
  describe 'when visiting /enrollments' do
    let!(:eloise_may) do
      create(:enrollment, location: 'Eloise May')
    end

    before :each do
      visit enrollments_path
    end

    it 'shows a list of enrollments' do
      expect(page).to have_content(eloise_may.location)
      expect(page).to have_content(eloise_may.formatted_date)
      expect(page).to have_content(eloise_may.formatted_time)
      expect(page).to have_link('Register for this session', visible: true)
    end

    context 'when selecting an enrollment Register button' do
      before do
        click_link('Register for this session')
      end

      it 'redirects to the new student page for that enrollment session' do
        expect(current_path).to eq(new_enrollment_student_path(eloise_may))
      end
    end

    context 'when the number of students registered equals the student limit' do
      before do
        create_list(:student, 30, enrollment: eloise_may)
        visit enrollments_path
      end

      it 'disables the registration button' do
        expect(page).to have_link('Register for this session', visible: false)
        # expect(page).to have_css('a.disabled', text: 'Register for this session') <-- alternative to above line
      end

      it 'raises an error if trying to click the disabled registration button' do
        expect do
          click_link('Register for this session')
        end.to raise_error(Selenium::WebDriver::Error::ElementClickInterceptedError)
      end
    end
  end
end
