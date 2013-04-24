class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :title, null: false
      t.string :link, null: false, unique: true

      t.timestamps
    end
  end
end
