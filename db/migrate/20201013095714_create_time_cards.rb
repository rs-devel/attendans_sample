class CreateTimeCards < ActiveRecord::Migration[5.2]
  def change
    create_table :time_cards do |t|
      t.integer :date
      t.integer :start_time
      t.integer :end_time
      t.integer :work_time

      t.timestamps
    end
  end
end
