class Entry < ActiveRecord::Base
  attr_accessible :description, :link, :pub_date, :title, :feed_id

  belongs_to :feed

  validates :link, :title, presence: true
end
