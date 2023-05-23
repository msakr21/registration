class AddEnrollmentToStudent < ActiveRecord::Migration[7.0]
  def change
    add_reference :students, :enrollment, null: false, foreign_key: true
  end
end
