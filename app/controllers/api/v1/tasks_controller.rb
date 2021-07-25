class Api::V1::TasksController < ApplicationController
  def index
    tasks = Task.all

    render json: tasks
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: task
    else
      render json: { error: task.errors.messages }, status: 422
    end
  end

  def update
    task = Task.find_by(slug: params[:slug])

    if task.update(task_params)
      render json: task
    else
      render json: { error: task.errors.messages }, status: 422
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :avatar_url, :completed)
  end
end
