require 'rails_helper'

RSpec.describe 'confirmation page', driver: :selenium_chrome, js: true do
  context 'after successfully submitting a form to join an enrollment' do
    let!(:eloise_may) { create(:enrollment, location: 'Eloise May') }

    before :each do
      visit new_enrollment_student_path(eloise_may)

      fill_in 'first_name', with: 'David'
      fill_in 'last_name', with: 'Labo'
      fill_in 'email', with: 'david.labo@someemail.com'
      fill_in 'phone', with: '1337666575'
      fill_in 'language', with: 'Spanish'
      click_button 'Submit'
    end

    it 'displays confirmation that the application has been received' do
      expect(page).to have_content 'Application Received'
    end

    it 'displays information about the enrollment session' do
      expect(page).to have_content "Thank you, David, for applying to the #{eloise_may.formatted_time} enrollment at Eloise May Library on #{eloise_may.formatted_date}."
    end

    it 'has a link leading to the Google Maps page for the library' do
      using_wait_time 1 do
        expect(page).to have_link('Eloise May', href: 'https://goo.gl/maps/SCNgdrXSaN9SoVHt5')
      end
      click_link('Eloise May')
      expect(current_url).to eq('https://www.google.com/maps/place/Eloise+May+Library+(Arapahoe+Libraries)/@39.6899334,-104.8938813,17z/data=!4m6!3m5!1s0x876c7d754dae30a1:0x35a1eceae7f50ae2!8m2!3d39.6899293!4d-104.8913064!16s%2Fg%2F1tcx2019?entry=tts&shorturl=1')
    end

    it 'displays an important notice' do
      expect(page).to have_content 'Important: Your registration is not yet complete. You will be contacted by someone from The Learning Source to confirm your registration'
    end

    it 'has a link directing back to the enrollments index page' do
      expect(page).to have_content 'Click here to return to the list of enrollments.'
      expect(page).to have_link('here')

      click_link 'here'
      expect(current_path).to eq(enrollments_path)
    end
  end
end
