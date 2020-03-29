class CreateCitizens < ActiveRecord::Migration[5.1]
  def change
    create_table :citizens do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :address

      t.timestamps
    end
  end
end
