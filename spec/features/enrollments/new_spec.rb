require 'rails_helper'

RSpec.describe 'enrollments index page', type: :feature, driver: :selenium_chrome, js:true do
  describe 'when I visit /enrollments/index' do
    it "I find a form to be filled" do
      # expect(Enrollment.all.length).to eq(0)
      visit '/enrollments/new'
      
      expect(page).to have_content("Please fill the form below:")
      # expect(page).to have_selector(:css, "form")
    end
  end
end