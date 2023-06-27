require 'rails_helper'

RSpec.describe 'admin new student page', type: :feature, driver: :selenium_chrome, js: true do
  describe 'when I visit admin/enrollments/:enrollment_id/students/new' do
    let(:eloise_may) { create(:enrollment, location: 'Eloise May') }
    let(:sheridan) { create(:enrollment, location: 'Sheridan') }

    before :each do
      visit new_admin_enrollment_student_path(eloise_may)
    end

    it 'I find a form to be filled' do
      expect(page).to have_content('Please fill the form below:')
      expect(page).to have_selector(:css, 'form')
      expect(page).to have_field('first_name')
      expect(page).to have_field('last_name')
      expect(page).to have_field('email')
      expect(page).to have_field('phone')
      expect(page).to have_field('language')
      expect(page).to have_button('Submit')
    end

    it 'Upon submitting form a new student is added to the enrollment' do
      expect(eloise_may.students.length).to eq(0)
      expect(sheridan.students.length).to eq(0)

      fill_in('first_name', with: 'David')
      fill_in('last_name', with: 'Labo')
      fill_in('email', with: 'david.labo@someemail.com')
      fill_in('phone', with: '1337666575')
      fill_in('language', with: 'Spanish')
      click_button('Submit')

      eloise_may.reload
      expect(eloise_may.students.length).to eq(1)
      expect(sheridan.students.length).to eq(0)
    end
  end
end
