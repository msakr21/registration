class AddLanguageToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :language, :string
    add_column :students, :level, :string
    add_column :students, :interpretation, :boolean
    rename_column :enrollments, :schedule, :start_time
    add_column :enrollments, :end_time, :datetime
  end
end
