source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.1'

# Rails
gem 'pg', '~> 1.1' # Use postgresql as the database for Active Record
gem 'phonelib' # Library to validate phone numbers
gem 'puma', '~> 5.0' # Use the Puma web server [https://github.com/puma/puma]
gem 'rails', '~> 7.0.4', '>= 7.0.4.3'
gem 'sprockets-rails' # The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby] # Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'vite_rails' # Modern JavaScript in Rails [https://github.com/rails/vite_ruby]
gem 'bcrypt'

group :development, :test do
  gem 'capybara'
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'pry'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers'
end

group :development do
  gem 'rubocop-rails'
  gem 'rubocop-rspec'
end

group :test do
  gem 'simplecov'
end
