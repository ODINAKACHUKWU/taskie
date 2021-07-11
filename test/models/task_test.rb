require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  def setup
    @task = tasks(:valid)
  end

  test "valid task" do
    assert @task.valid?
  end

  test "invalid task without a title" do
    @task.title = nil
    assert_not @task.valid?
  end

  test "valid attributes" do
    assert_not_nil @task.title
    assert_not_nil @task.description
    assert_not_nil @task.avatar_url
    assert_nil @task.slug
    assert_not_nil @task.completed
    assert_not_nil @task.created_at
    assert_not_nil @task.updated_at
    assert_equal 'Test task', @task.title
    assert_equal 'Task description', @task.description
    assert_equal 'https://s.gravatar.com/avatar/d4c74594d841139328695756648b6bd6', @task.avatar_url
  end

  test "completed is present and defaults to false" do
    assert_not_nil @task.completed
    assert_not @task.completed
  end

  test "instance of Task" do
    assert_instance_of Task, @task
  end

  test "slug is created" do
    task = Task.create({ title: "Update task", description: "Task to update" })
    slug = "#{task.title.parameterize}-#{task.id}"

    assert_not_nil task.slug
    assert_equal slug, task.slug
  end
end
