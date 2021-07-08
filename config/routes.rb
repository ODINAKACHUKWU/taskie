Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :update], param: :slug
    end
  end

  root "pages#home"

  get "/*path", to: "pages#home"
end
