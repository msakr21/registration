require 'rails_helper'

RSpec.describe 'enrollments index page', type: :feature, driver: :selenium_chrome, js: true do
  describe 'when I visit /enrollments' do
    before :each do
      @eloise_may = Enrollment.create(location: 'Eloise May', schedule: DateTime.parse('2023-06-11T05:00:24.000Z'), student_limit: 30)
    end

    it 'I see a list of enrollments' do
      visit '/enrollments'

      expect(page).to have_content('Location: Eloise May')
      expect(page).to have_content("Schedule: 2023-06-11T05:00:24.000Z")
      expect(page).to have_button("Register for this session")
    end

    it "redirects to the new student page for an enrollment session if an enrollment's Register button is selected" do
      visit '/enrollments'

      expect(page).to have_content('Location: Eloise May')
      expect(page).to have_content("Schedule: 2023-06-11T05:00:24.000Z")
      expect(page).to have_button("Register for this session")

      click_button("Register for this session")

      expect(current_path).to eq("/enrollments/#{@eloise_may.id}/students/new")
    end
  end
end
