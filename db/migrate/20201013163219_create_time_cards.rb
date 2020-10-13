class CreateTimeCards < ActiveRecord::Migration[5.2]
  def change
    create_table :time_cards do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :work_time

      t.timestamps
    end
  end
end
