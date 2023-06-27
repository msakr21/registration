Rails.application.routes.draw do
  root 'pages#home'

  resources :enrollments, only: [:index, :show] do
    resources :students, only: [:new, :create]
  end

  namespace :admin do
    resources :enrollments do
      resources :students
    end
  end
end
