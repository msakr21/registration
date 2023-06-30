require 'rails_helper'

RSpec.describe 'new student page', driver: :selenium_chrome, js: true do
  describe 'when I visit /enrollments/:enrollment_id/students/new' do
    let!(:eloise_may) { create(:enrollment, location: 'Eloise May') }
    let!(:sheridan) { create(:enrollment, location: 'Sheridan') }

    before :each do
      visit new_enrollment_student_path(eloise_may)
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
      fill_in('first_name', with: 'David')
      fill_in('last_name', with: 'Labo')
      fill_in('email', with: 'david.labo@someemail.com')
      fill_in('phone', with: '1337666575')
      fill_in('language', with: 'Spanish')
      click_button('Submit')

      eloise_may.reload
      expect(eloise_may.students.count).to eq(1)
      expect(sheridan.students.count).to eq(0)
    end

    context 'as a user when I fill the form on the page' do
      it 'adds me to the enrollment upon pressing submit and redirects me to a confirmation page' do
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
        expect(current_path).to eq(confirmation_path)
      end
    end

    context 'as a user if I submit the form when an enrollment is full' do
      let!(:students_may) { create_list(:student, eloise_may.student_limit, enrollment: eloise_may) }

      it "will not add me and instead redirect me to the enrollments index page with an error message that session is full" do
        eloise_may.reload
        expect(eloise_may.students.length).to eq(eloise_may.student_limit)
        visit new_enrollment_student_path(eloise_may)
        expect(current_path).to eq(enrollments_path)
      end
    end
  end
end
