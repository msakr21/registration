Rails.application.routes.draw do
  root 'pages#home'
  
  namespace :admin do
    resources :enrollments do
      resources :students
    end
  end

  resources :enrollments, only: [:index, :show] do
    resources :students, only: [:new, :create]
  end
end
