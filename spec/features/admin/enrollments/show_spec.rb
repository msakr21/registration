require 'rails_helper'

RSpec.describe 'admin enrollments show page', driver: :selenium_chrome, js: true do
  describe 'when I visit /admin/enrollments/:id' do
    let(:enrollment) { create(:enrollment) }
    let!(:students) { create_list(:student, 20, enrollment:) }

    before :each do
      visit admin_enrollment_path(enrollment.id)
    end

    it 'sees the current enrollment with its information' do
      expect(page).to have_content(enrollment.location)
      expect(page).to have_content(enrollment.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%m/%d/%Y'))
      expect(page).to have_content(enrollment.schedule.in_time_zone('Mountain Time (US & Canada)').strftime('%I:%M %p'))
      expect(page).to have_content(enrollment.student_limit)
      expect(page).to have_content(enrollment.students.count)
      expect(page).to have_link('Edit Session', visible: true)
      expect(page).to have_button('Delete Session', visible: true)
    end

    it 'shows a list of all enrolled students' do
      students.each do |student|
        expect(page).to have_content(student.first_name)
        expect(page).to have_content(student.last_name)
        expect(page).to have_content(student.email)
        expect(page).to have_content(student.phone)
        expect(page).to have_content(student.language)
      end
    end

    it 'shows a trash button, an pen button, and a save button(disabled by default) for every student' do
      expect(page).to have_button('trash', count: 20)
      expect(page).to have_button('pen', count: 20)
      expect(page).to have_button('save', disabled: true, count: 20)
    end

    it 'shows a a print button in the enrollment details' do
      within '#enrollmentCard' do
        expect(page).to have_button('print')
      end
    end

    xit 'can edit a student' do
      students.first
      find("button[name='pen']", match: :first).click
    
      within('#editForm') do
        fill_in 'first_name', with: 'Billy'
        fill_in 'last_name', with: 'Bob'
        fill_in 'email', with: 'billybob@yahoo.com'
        fill_in 'phone', with: '15684568547'
        fill_in 'language', with: 'Spanish'
      end
    
      find_by_id('editForm').click_button('Save')
    
      expect(page).to have_content('Billy')
      expect(page).to have_content('Bob')
      expect(page).to have_content('billybob@yahoo.com')
      expect(page).to have_content('15684568547')
      expect(page).to have_content('Spanish')
    end
    

    it 'can delete a student' do
      first_student = students.first
      find("button[name='trash']", match: :first).click

      within('.modal-dialog') do
        click_button 'Delete'
      end

      expect(page).not_to have_content(first_student.last_name)
      expect(page).not_to have_content(first_student.email)
      expect(page).not_to have_content(first_student.phone)
    end
  end
end
