class AddLanguageToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :language, :string
  end
end
