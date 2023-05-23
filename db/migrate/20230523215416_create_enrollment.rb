class CreateEnrollment < ActiveRecord::Migration[7.0]
  def change
    create_table :enrollments do |t|
      t.string :location
      t.datetime :schedule
      t.integer :student_limit

      t.timestamps
    end
  end
end
