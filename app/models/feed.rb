require 'open-uri'

class Feed < ActiveRecord::Base
  attr_accessible :link, :title

  validates :title, presence: true
  validates :link, presence: true, uniqueness: true

  has_many :entries

  def self.fetch_all_entries
    self.all.each do |feed|
      feed.fetch_entries
    end
  end

  def fetch_entries
    puts "being"
    puts self.link
    puts "end"
    rss = SimpleRSS.parse open(self.link)

    rss.entries.each do |enum|
      Entry.create(:link => enum.link,
                   :title => enum.title,
                   :description => enum.description,
                   :feed_id => self.id
      )
    end
  end

end
