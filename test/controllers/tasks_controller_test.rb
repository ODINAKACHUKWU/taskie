require 'test_helper'

class TasksControllerTest < ActionDispatch::IntegrationTest
  tasks = [
    {
      title: "New task",
      description: "This is a new task",
      avatar_url: "task url"
    },
    {
      title: "Second new task",
      description: "This is another new task",
      avatar_url: "task url"
    }
  ]

  test "should fetch all tasks" do
    get "/api/v1/tasks"

    assert_response :success
    assert_equal 3, Task.count
  end

  test "should create a task" do
    assert_difference 'Task.count', 2 do
      tasks.each do |x|
        post "/api/v1/tasks", params: { task: x }, as: :json
      end
    end

    assert_response :success
  end

  test "should update a task" do
    task = Task.create({ title: "Update task", description: "Task to update" })

    patch "/api/v1/tasks/#{task.slug}", params: { task: { completed: true } }, as: :json

    assert response.parsed_body['completed']
    assert_response :success
  end
end
