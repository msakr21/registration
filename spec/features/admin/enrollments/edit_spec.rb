require 'rails_helper'

RSpec.describe 'edit enrollment page', driver: :selenium_chrome, js: true do
  let!(:eloise_may) do
    create(:enrollment, location: 'Eloise May')
  end

  let(:date_field_css) do
    'input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]'
  end

  let(:time_field_css) do
    'input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]'
  end

  describe 'pre-filled form display' do
    before do
      visit edit_admin_enrollment_path(eloise_may)
    end

    it "displays a form pre-filled with the enrollment's data" do
      expect(page).to have_content('Please fill the form below:')
      expect(page).to have_selector(:css, 'form')
      expect(page).to have_field('student_limit', with: '30')
      expect(page).to have_select('location', selected: 'Eloise May')

      expect(find(date_field_css).value).to eq(eloise_may.formatted_date)
      expect(find(time_field_css).value).to eq(eloise_may.formatted_time)
      expect(page).to have_button('Submit')
    end
  end

  describe 'form submission' do
    before do
      visit edit_admin_enrollment_path(eloise_may)
    end

    context 'when the form is filled out correctly' do
      before do
        within('div#location') do
          find("option[value='Smoky Hill']").click
        end

        fill_in('student_limit', with: 20)
        find(date_field_css).set('06/20/2030')
        find(time_field_css).set('09:00 AM')

        click_button('Submit')

        eloise_may.reload
      end

      it 'updates the record with changes upon clicking submit' do
        expect(eloise_may.location).to eq('Smoky Hill')
        expect(eloise_may.student_limit).to eq(20)
        expect(eloise_may.schedule.change(sec: 0)).to eq(DateTime.parse('2030-06-20T15:00:00.000Z'))
      end

      it 'redirects to the admin enrollments index page after updating' do
        expect(current_path).to eq(admin_enrollments_path)
      end
    end
  end
end
