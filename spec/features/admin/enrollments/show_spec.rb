require 'rails_helper'

RSpec.describe 'admin enrollments show page', type: :feature, driver: :selenium_chrome, js: true do
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
      end
    end

    it 'shows a trash button, an pen button, and a save button(disabled by default) for every student' do
      expect(page).to have_button("trash", count: 20)
      expect(page).to have_button("pen", count: 20)
      expect(page).to have_button("save", disabled: true, count: 20)
    end

    it 'shows a a print button in the enrollment details ' do
      within '#enrollmentCard' do
        expect(page).to have_button("print")
      end

      # print_window = window_opened_by do
      #   page.evaluate_script('window.print()')
      # end
      
      # page.within_window(print_window) do
      #    print_app = page.find('print-preview-app')
      #    print_app_shadow = print_app.evaluate_script('this.shadowRoot')
      #    print_header = print_app_shadow.find('print-preview-header')
      #    print_header_shadow = print_header.evaluate_script('this.shadowRoot')
      #    print_header_shadow.find('.cancel-button').click
      # end
    end
  end
end
