require 'rails_helper'

RSpec.describe 'admin enrollments index page', type: :feature, driver: :selenium_chrome, js: true do
  describe 'when I visit /admin/enrollments' do
    let!(:eloise_may) { Enrollment.create(location: 'Eloise May', schedule: DateTime.parse('2030-06-11T15:00:24.000Z'), student_limit: 30) }

    it 'I see a list of enrollments' do
      visit '/admin/enrollments'
    
      expect(page).to have_content('Eloise May')
      expect(page).to have_content('06/11/2030')
      expect(page).to have_content('09:00 AM')
      expect(page).to have_link('Add Student', visible: true)
      expect(page).to have_link('Edit Session', visible: true)
      expect(page).to have_link('Show Details', visible: true)
      expect(page).to have_button('Delete Session', visible: true)
    end

    it "redirects to the new student page for an enrollment session if an enrollment's Add Student button is clicked" do
      visit '/admin/enrollments'

      click_link('Add Student')

      expect(current_path).to eq("/admin/enrollments/#{eloise_may.id}/students/new")
    end

    it 'will disable the Add Student button if number of students registered is not less than the student limit' do
      i = 0
      until Student.all.length == 30
        eloise_may.students.create(first_name: "test#{i}", last_name: "test#{i}", email: "test#{i}@email.com", phone: '0000000000')
        i += 1
      end

      visit '/admin/enrollments'

      expect(page).to have_link('Add Student', visible: false)
      expect { click_link('Add Student') }.to raise_error(Selenium::WebDriver::Error::ElementClickInterceptedError)
    end

    it "redirects to the enrollment edit page if an enrollment's Edit Session button is clicked" do
      visit '/admin/enrollments'

      click_link('Edit Session')

      expect(current_path).to eq("/admin/enrollments/#{eloise_may.id}/edit")
    end


    it "renders a delete confirmation modal if an enrollment's Delete Session button is clicked" do
      visit '/admin/enrollments'

      click_button('Delete Session')
      
      expect(page).to have_css('body.modal-open')
      within('body.modal-open') do
        expect(page).to have_css('div.fade.modal.show')
        within('div.fade.modal.show') do
          expect(page).to have_css('div.modal-dialog')
          within('div.modal-dialog') do
            expect(page).to have_button('Delete')
            expect(page).to have_button('Cancel')
          end
        end
      end
    end

   it "renders a delete button within the modal that would delete the enrollment session" do
      expect(Enrollment.all.length).to eq(1)
      visit '/admin/enrollments'

      click_button('Delete Session')
      expect(page).to have_css('body.modal-open')
      within('body.modal-open') do
        expect(page).to have_css('div.fade.modal.show')
        within('div.fade.modal.show') do
          expect(page).to have_css('div.modal-dialog')
          within('div.modal-dialog') do
            click_button('Delete')
          end
        end
      end

      expect(Enrollment.all.length).to eq(0)
      expect(page).to have_content("The enrollment was deleted successfully.")
      expect(page).to_not have_content('Eloise May')
      expect(page).to_not have_content('06/11/2030')
      expect(page).to_not have_content('09:00 AM')
    end

   it "renders a cancel button within the modal that would cancel the deletion of the enrollment session" do
      expect(Enrollment.all.length).to eq(1)
      visit '/admin/enrollments'

      click_button('Delete Session')
      expect(page).to have_css('body.modal-open')
      within('body.modal-open') do
        expect(page).to have_css('div.fade.modal.show')
        within('div.fade.modal.show') do
          expect(page).to have_css('div.modal-dialog')
          within('div.modal-dialog') do
            click_button('Cancel')
          end
        end
      end

      expect(Enrollment.all.length).to eq(1)
      expect(page).to have_link('Add Student', visible: true)
      expect(page).to have_link('Edit Session', visible: true)
      expect(page).to have_link('Show Details', visible: true)
      expect(page).to have_button('Delete Session', visible: true)
    end

    it "renders an error message if an admin tries to delete an enrollment with registered students" do
      eloise_may.students.create(first_name: 'Bryan', last_name: 'Keener', email: 'bryan.keener@persona.com', phone: '5555555555')
      expect(Enrollment.all.length).to eq(1)
      visit '/admin/enrollments'

      click_button('Delete Session')
      expect(page).to have_css('body.modal-open')
      within('body.modal-open') do
        expect(page).to have_css('div.fade.modal.show')
        within('div.fade.modal.show') do
          expect(page).to have_css('div.modal-dialog')
          within('div.modal-dialog') do
            click_button('Delete')
          end
        end
      end

      expect(Enrollment.all.length).to eq(1)
      expect(page).to have_content("Can't delete session with registered students. Please remove students first.")
      expect(page).to have_link('Add Student', visible: true)
      expect(page).to have_link('Edit Session', visible: true)
      expect(page).to have_link('Show Details', visible: true)
      expect(page).to have_button('Delete Session', visible: true)
    end
  end
end
