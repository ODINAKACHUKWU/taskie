class TaskSerializer < ActiveModel::Serializer
  attributes :title, :description, :avatar_url, :slug, :completed, :updated_at
end
