require 'active_support/core_ext/integer/time'

# The test environment is used exclusively to run your application's
# test suite. You never need to work with it otherwise. Remember that
# your test database is "scratch space" for the test suite and is wiped
# and recreated between test runs. Don't rely on the data there!

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # General application settings
  config.cache_classes = true # Classes are cached (set to false under Spring and add config.action_view.cache_template_loading = true).
  config.eager_load = ENV['CI'].present? # Eager load the whole application when running on a continuous integration system.

  # Assets settings
  config.assets.compile = true # Assets are compiled.

  # Caching settings
  config.action_controller.perform_caching = false # Caching is disabled.
  config.cache_store = :null_store # Use the null object as the cache store.

  # File serving settings
  config.public_file_server.enabled = true # Enable the public file server.
  config.public_file_server.headers = { 'Cache-Control' => "public, max-age=#{1.hour.to_i}" } # Set Cache-Control for performance.

  # Error handling settings
  config.consider_all_requests_local = true # Show full error reports.
  config.action_dispatch.show_exceptions = false # Raise exceptions instead of rendering exception templates.

  # Security settings
  config.action_controller.allow_forgery_protection = true # Enable request forgery protection.

  # Active Support settings
  config.active_support.deprecation = :stderr # Print deprecation notices to the stderr.
  config.active_support.disallowed_deprecation = :raise # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation_warnings = [] # Specify which deprecation messages to disallow.

  # I18n settings
  # config.i18n.raise_on_missing_translations = true  # Uncomment to raise error for missing translations.

  # Action View settings
  # config.action_view.annotate_rendered_view_with_filenames = true  # Uncomment to annotate rendered view with file names.
end
