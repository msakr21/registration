require 'rails_helper'

RSpec.describe 'new enrollment page', driver: :selenium_chrome, js: true do
  let(:new_enrollment_path) { '/admin/enrollments/new' }
  let(:location) { 'Eloise May' }
  let(:student_limit) { 30 }
  let(:date) { '06/20/2030' }
  let(:time) { '09:00 AM' }

  before do
    visit new_enrollment_path
  end

  describe 'display of the form' do
    it 'displays a form to be filled' do
      expect(page).to have_content('Please fill the form below:')
      expect(page).to have_selector(:css, 'form')
      expect(page).to have_field('student_limit')
      expect(page).to have_select('location')
      expect(page).to have_css('input[placeholder="MM/DD/YYYY"]')
      expect(page).to have_css('input[placeholder="hh:mm aa"]')
      expect(page).to have_button('Submit')
    end
  end

  describe 'form submission' do
    before do
      within('div#location') do
        find("option[value='#{location}']").click
      end

      fill_in('student_limit', with: student_limit)
      find('input[placeholder="MM/DD/YYYY"]').set(date)
      find('input[placeholder="hh:mm aa"]').set(time)

      click_button('Submit')
    end

    context 'when the form is filled out correctly' do
      it 'creates a new enrollment upon submitting form' do
        expect(Enrollment.all.length).to eq(1)
        expect(Enrollment.first.location).to eq(location)
        expect(Enrollment.first.student_limit).to eq(student_limit)
        expect(Enrollment.first.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%Y/%m/%d %I:%M %p')).to eq('2030/06/20 09:00 AM')
      end

      it 'redirects to the admin enrollments index page upon creating a new enrollment' do
        expect(current_path).to eq('/admin/enrollments')
      end
    end
  end
end
