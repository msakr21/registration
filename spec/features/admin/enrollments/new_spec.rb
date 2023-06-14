require 'rails_helper'

RSpec.describe 'new enrollment page', type: :feature, driver: :selenium_chrome, js: true do
  it 'displays a form to be filled' do
    visit '/admin/enrollments/new'

    expect(page).to have_content('Please fill the form below:')
    expect(page).to have_selector(:css, 'form')
    expect(page).to have_field('student_limit')
    expect(page).to have_select('location')
    expect(page).to have_css('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]')
    expect(page).to have_css('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]')
    expect(page).to have_button('Submit')
  end

  it 'creates a new enrollment upon submitting form' do
    expect(Enrollment.all.length).to eq(0)
    visit '/admin/enrollments/new'

    within('div#location') do
      find("option[value='Eloise May']").click
    end

    fill_in('student_limit', with: 30)

    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]').set("06/20/2030")
    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]').set('09:00 AM')
    
    click_button('Submit')

    expect(Enrollment.all.length).to eq(1)
    expect(Enrollment.all.first.location).to eq('Eloise May')
    expect(Enrollment.all.first.student_limit).to eq(30)
    expect(Enrollment.all.first.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%Y/%m/%d %I:%M %p')).to eq('2030/06/20 09:00 AM')
  end

  it 'redirects to the admin enrollments index page upon creating a new enrollment' do
    expect(Enrollment.all.length).to eq(0)
    visit '/admin/enrollments/new'

    fill_in('student_limit', with: 30)

    within('div#location') do
      find("option[value='Eloise May']").click
    end

    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]').set("06/20/2030")
    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]').set('09:00 AM')
    
    click_button('Submit')

    expect(current_path).to eq("/admin/enrollments")
  end
end