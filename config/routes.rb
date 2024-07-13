Rails.application.routes.draw do
  # Root path
  root 'pages#home'

  # Enrollment and student routes for users
  resources :enrollments, only: [:index, :show] do
    resources :students, only: [:new, :create]
  end

  # Confirmation page
  get '/confirmation', to: 'pages#confirmation'

  # Admin routes
  namespace :admin do
    resources :enrollments do
      resources :students
    end
  end
end
