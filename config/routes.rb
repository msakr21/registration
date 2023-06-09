Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/enrollments/new', to: 'enrollments#new'
  get '/enrollments', to: 'enrollments#index'
  get '/enrollments/:id/edit', to: 'enrollments#edit'
  patch '/enrollments/:id', to: 'enrollments#update'
  post '/enrollments', to: 'enrollments#create'

  get '/enrollments/:id/students/new', to: 'students#new'
  post '/students', to: 'students#create'
  get '/enrollments/:enrollment_id/students', to: 'students#index'
  get '/enrollments/:enrollment_id/students/:id', to: 'students#show'
  get '/enrollments/:enrollment_id/students/:id/edit', to: 'students#edit'
  delete '/enrollments/:enrollment_id/students/:id', to: 'students#delete'
  patch '/enrollments/:enrollment_id/students/:id', to: 'students#update'
end
