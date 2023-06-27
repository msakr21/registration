require 'rails_helper'

RSpec.describe 'home page', type: :feature, driver: :selenium_chrome, js: true do
  it 'has a prompt for admin user experience and a prompt for prospective student user experience' do
    visit root_path

    expect(page).to have_content('Enrollment Registration System')
    expect(page).to have_content("If you're an admin, please click")
    expect(page).to have_content("If you're a student, please click")

    expect(page).to have_link('here', href: admin_enrollments_path)
    expect(page).to have_link('here', href: enrollments_path)
  end
end
