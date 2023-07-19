require 'rails_helper'

RSpec.describe 'home page', driver: :selenium_chrome, js: true do
  context 'viewing home page' do
    before :each do
      visit root_path
    end

    describe 'page header' do
      it 'displays the title of the Enrollment Registration System' do
        expect(page).to have_content('Enrollment Registration System')
      end
    end

    describe 'admin user prompt' do
      it 'provides a prompt and link for admin users' do
        expect(page).to have_content("If you're an admin, please click")
        expect(page).to have_link('here', href: admin_enrollments_path)
      end
    end

    describe 'student user prompt' do
      it 'provides a prompt and link for prospective students' do
        expect(page).to have_content("If you're a student, please click")
        expect(page).to have_link('here', href: enrollments_path)
      end
    end
  end
end
