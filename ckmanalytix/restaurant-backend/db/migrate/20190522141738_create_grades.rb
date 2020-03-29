class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.string :dba
      t.string :boro
      t.integer :building
      t.string :street
      t.integer :zipcode
      t.string :cuisine_description
      t.string :violation_description
      t.string :critical_flag
      t.integer :score
      t.string :grade
      t.string :grade_date
      t.string :record_date

      t.timestamps
    end
  end
end
