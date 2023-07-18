require 'rails_helper'

RSpec.describe 'edit enrollment page', driver: :selenium_chrome, js: true do
  let!(:eloise_may) do
    create(:enrollment, location: 'Eloise May')
  end

  before do
    visit edit_admin_enrollment_path(eloise_may)
  end

  it "displays a form pre-filled with the enrollment's data" do
    expect(page).to have_content('Please fill the form below:')
    expect(page).to have_selector(:css, 'form')
    expect(page).to have_field('student_limit', with: '30')
    expect(page).to have_select('location', selected: 'Eloise May')
    expect(find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]').value).to eq("#{eloise_may.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%m/%d/%Y')}")
    expect(find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]').value).to eq("#{eloise_may.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p')}")
    expect(page).to have_button('Submit')
  end

  it 'updates the record with changes upon clicking submit' do
    within('div#location') do
      find("option[value='Smoky Hill']").click
    end

    fill_in('student_limit', with: 20)

    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]').set('06/20/2030')
    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]').set('09:00 AM')

    click_button('Submit')
    eloise_may.reload
    expect(eloise_may.location).to eq('Smoky Hill')
    expect(eloise_may.student_limit).to eq(20)
    expect(eloise_may.schedule.change(sec: 0)).to eq(DateTime.parse('2030-06-20T15:00:00.000Z'))
  end

  it 'redirects to the admin enrollments index page after updating' do
    click_button('Submit')

    expect(current_path).to eq(admin_enrollments_path)
  end
end
