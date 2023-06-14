require 'rails_helper'

RSpec.describe 'edit enrollment page', type: :feature, driver: :selenium_chrome, js: true do
  before :each do
    @eloise_may = Enrollment.create(location: 'Eloise May', schedule: DateTime.parse('2030-06-10T15:00:24.000Z'), student_limit: 30)
  end

  it "displays a form pre-filled with the enrollment's data" do
    visit "/admin/enrollments/#{@eloise_may.id}/edit"

    expect(page).to have_content('Please fill the form below:')
    expect(page).to have_selector(:css, 'form')
    expect(page).to have_field('student_limit', with: "30")
    expect(page).to have_select('location', :selected => "Eloise May")
    
    expect(find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]').value).to eq("06/10/2030")
    expect(find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]').value).to eq('09:00 AM')
    expect(page).to have_button('Submit')
  end

  it 'it updates the record with changes upon clicking submit' do
    visit "/admin/enrollments/#{@eloise_may.id}/edit"

    within('div#location') do
      find("option[value='Smoky Hill']").click
    end

    fill_in('student_limit', with: 20)

    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="MM/DD/YYYY"]').set("06/20/2030")
    find('input[type="text"][class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd css-nxo287-MuiInputBase-input-MuiOutlinedInput-input"][placeholder="hh:mm aa"]').set('09:00 AM')
    
    click_button('Submit')
    @eloise_may.reload
    expect(@eloise_may.location).to eq("Smoky Hill")
    expect(@eloise_may.student_limit).to eq(20)
    expect(@eloise_may.schedule).to eq(DateTime.parse('2030-06-20T15:00:24.000Z'))
  end

  it 'it redirects to the adminenrollments index page after updating' do
    visit "/admin/enrollments/#{@eloise_may.id}/edit"

    click_button('Submit')

    expect(current_path).to eq("/admin/enrollments")
  end
end