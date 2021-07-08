class Task < ApplicationRecord
  validates :title, presence: true

  after_create :slugify

  def slugify
    update(slug: "#{title.parameterize}-#{id}")
  end
end
