Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/enrollments/new', to: 'enrollments#new'
  get '/enrollments', to: 'enrollments#index'
  post '/enrollments', to: 'enrollments#create'
end
