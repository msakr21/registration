require 'rails_helper'

RSpec.describe 'admin enrollments show page', type: :feature, driver: :selenium_chrome, js: true do
  describe 'when I visit /admin/enrollments/:id' do
    let(:enrollment) { create(:enrollment) }

    before :each do
      visit admin_enrollment_path(enrollment.id)
    end

    it 'I see a list of enrollments' do
      expect(page).to have_content(enrollment.location)
      expect(page).to have_content(enrollment.schedule.iso8601(3))
      expect(page).to have_link('Register new student for this session', visible: true)
    end

    it "redirects to the new student page for an enrollment session if an enrollment's Register button is selected" do
      click_link('Register new student for this session')

      expect(current_path).to eq("/enrollments/#{enrollment.id}/students/new")
    end

    it 'will disable the registration button if number of students registered is equal to student limit' do
      30.times do |i|
        create(:student, first_name: "test#{i}", last_name: "test#{i}", email: "test#{i}@email.com", phone: '0000000000', enrollment:)
      end

      visit admin_enrollment_path(enrollment.id)

      expect(page).to have_link('Register new student for this session', visible: false)
      expect { click_link('Register new student for this session') }.to raise_error(Selenium::WebDriver::Error::ElementClickInterceptedError)
    end
  end
end
