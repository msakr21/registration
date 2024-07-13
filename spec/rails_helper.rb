# SimpleCov configuration
require 'simplecov'
SimpleCov.start

# Test environment configuration
require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'

require_relative '../config/environment'

# Prevent database truncation if the environment is production
abort('The Rails environment is running in production mode!') if Rails.env.production?

require 'rspec/rails'
require 'capybara/rails'
require 'capybara/rspec'

# ViteRuby logger configuration
ViteRuby.instance.logger = ActiveSupport::Logger.new($stdout)

# Load support files
Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

# Maintain Test Schema
begin
  ActiveRecord::Migration.maintain_test_schema!
rescue ActiveRecord::PendingMigrationError => e
  abort e.to_s.strip
end

# Capybara configuration
Capybara.register_driver :selenium_chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.javascript_driver = :selenium_chrome
Capybara.default_max_wait_time = 0

# RSpec configuration
RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
  config.fixture_path = "#{Rails.root.join('spec/fixtures')}"
  config.use_transactional_fixtures = true
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
end

# Shoulda Matchers configuration
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
