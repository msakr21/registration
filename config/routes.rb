Rails.application.routes.draw do

  # Enrollment and student routes for users
  scope "(:locale)", locale: /en|es|ar|ru/ do
    resources :enrollments, only: [:index, :show] do
      resources :students, only: [:new, :create]
    end

    get "/", to: "pages#home", as: :locale_root

    get '/confirmation', to: 'pages#confirmation'
  end

  # Confirmation page
  # get '/confirmation', to: 'pages#confirmation'

  # Login page
  get '/login', to: 'admin/sessions#new'
  post '/admin/sessions/create', to: 'admin/sessions#create'

  #Logout page
  delete '/logout', to: 'admin/sessions#destroy'

  # Admin routes
  namespace :admin do
    resources :enrollments do
      resources :students, only:[:new, :create, :destroy, :update]
    end
  end
end
