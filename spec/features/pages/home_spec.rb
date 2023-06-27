require 'rails_helper'

RSpec.describe 'home page', type: :feature, driver: :selenium_chrome, js: true do
  it 'has a prompt for admin user experience and a prompt for prospective student user experience' do
    visit "/"

    expect(page).to have_content("Enrollment Registeration System")
    expect(page).to have_content("If you're an admin, please click here")
    expect(page).to have_content("If you're an admin, please click here")
    expect(page).to have_link("here", href: "/admin/enrollments")
    expect(page).to have_link("here", href: "/enrollments")
  end
end