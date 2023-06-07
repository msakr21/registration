require 'rails_helper'

RSpec.describe 'enrollments index page', type: :feature do
  describe 'when I visit /enrollments' do
    before :each do
      @eloise_may = Enrollment.create(location: "Eloise May", schedule: DateTime.parse('2023-06-11T05:00:24.000Z'), student_limit: 30)
    end

    it "I see a list of enrollments" do
      visit '/enrollments'

      expect(page).to have_content("Location: Eloise May")
    end
  end
end

# RSpec.feature 'Home', test_helpers: [:home] do
#   before { visit(urls.home_path) }

#   scenario 'visit home page' do
#     home.should.have_content('Vite Rails')
#   end

#   scenario 'hmr in the home page when the Vite dev server is running', if: !ENV['CI'] do
#     raise 'the Vite dev server is not running' unless ViteRuby.instance.dev_server_running?

#     home.should.have_content('Vite Rails')

#     home.rewrite('Rails', to: 'Ruby')
#     home.should_now.have_content('Vite Ruby')

#     home.rewrite('Ruby', to: 'Rails')
#     home.should_now.have_content('Vite Rails')
#   ensure
#     home.revert_changes
#   end
# end