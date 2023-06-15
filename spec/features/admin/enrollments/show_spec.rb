require 'rails_helper'

RSpec.describe 'admin enrollments show page', type: :feature, driver: :selenium_chrome, js: true do
  describe 'when I visit /admin/enrollments/:id' do
    let!(:eloise_may) { Enrollment.create(location: 'Eloise May', schedule: DateTime.parse('2030-06-11T05:00:24.000Z'), student_limit: 30) }

    it 'I see a list of enrollments' do
      visit admin_enrollment_path(eloise_may.id)

      expect(page).to have_content('Location: Eloise May')
      expect(page).to have_content('Schedule: 2030-06-11T05:00:24.000Z')
      expect(page).to have_link('Register new student for this session', visible: true)
    end

    it "redirects to the new student page for an enrollment session if an enrollment's Register button is selected" do
      visit '/admin/enrollments'

      click_link('Register new student for this session')

      expect(current_path).to eq("/enrollments/#{eloise_may.id}/students/new")
    end

    it 'will disable the registration button if number of students registered is equal to student limit' do
      i = 0
      until Student.all.length == 30
        eloise_may.students.create(first_name: "test#{i}", last_name: "test#{i}", email: "test#{i}@email.com", phone: '0000000000')
        i += 1
      end

      visit '/admin/enrollments'

      expect(page).to have_link('Register new student for this session', visible: false)
      expect { click_link('Register new student for this session') }.to raise_error(Selenium::WebDriver::Error::ElementClickInterceptedError)
    end
  end
end
