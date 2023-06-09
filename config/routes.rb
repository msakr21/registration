Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :admin do
    resources :enrollments do
      resources :students 
    end
  end

  resources :enrollments, only: [:index, :show] do
    resources :students, only: [:new, :create]
  end
end
