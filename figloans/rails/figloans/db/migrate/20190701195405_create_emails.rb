class CreateEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :emails do |t|
      t.string :content
      t.integer :citizen_id
      t.integer :sender_id
      t.boolean :citizen_active
      t.boolean :sender_active

      t.timestamps
    end
  end
end
