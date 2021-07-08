class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.text :avatar_url
      t.string :slug
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
