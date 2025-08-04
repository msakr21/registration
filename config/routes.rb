Rails.application.routes.draw do
  get '/admin/login', to: 'admin/sessions#new'
  post '/admin/sessions/create', to: 'admin/sessions#create'
  # Admin routes
  namespace :admin do
    resources :enrollments do
      resources :students, only:[:new, :create, :destroy, :update]
    end
  end
  #Logout page
  delete '/logout', to: 'admin/sessions#destroy'

  scope "(:locale)", locale: /en|es|ar|ru/ do
    resources :enrollments, only: [:index] do
      resources :students, only: [:new, :create]
    end

    get "/", to: "pages#home", as: :locale_root

    get '/confirmation', to: 'pages#confirmation'
    get '/duplicate', to: 'pages#duplicate'
  end
end