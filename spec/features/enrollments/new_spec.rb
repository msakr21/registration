require 'rails_helper'

RSpec.describe 'enrollments index page', type: :feature, driver: :selenium_chrome, js:true do
  describe 'when I visit /enrollments/index' do
    it "I find a form to be filled" do
      # expect(Enrollment.all.length).to eq(0)
      visit '/enrollments/new'
      
      expect(page).to have_content("Please fill the form below:")
      expect(page).to have_selector(:css, "form")
      expect(page).to have_field('student_limit')
      expect(page).to have_selector(:css, "select")
      expect(page).to have_css('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]')
      expect(page).to have_css('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]')
      expect(page).to have_button('Submit')
    end
  end
end