class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title, null: false
      t.string :link, null: false
      t.string :description
      t.string :pub_date
      t.references :feed

      t.timestamps
    end
    add_index :entries, :feed_id
    add_index :entries, :pub_date
  end
end
