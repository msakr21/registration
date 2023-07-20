require 'active_support/core_ext/integer/time'

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # Development environment settings
  # These settings are perfect for development since you don't have to restart the web server when you make code changes.
  config.cache_classes = false  # Do not cache classes, code is reloaded any time it changes.
  config.eager_load = false     # Do not eager load code on boot.
  config.consider_all_requests_local = true # Show full error reports.
  config.server_timing = true # Enable server timing.

  # Cache configuration settings
  # By default caching is disabled. Run rails dev:cache to toggle caching.
  if Rails.root.join('tmp/caching-dev.txt').exist?
    config.action_controller.perform_caching = true
    config.action_controller.enable_fragment_cache_logging = true
    config.cache_store = :memory_store
    config.public_file_server.headers = {
      'Cache-Control' => "public, max-age=#{2.days.to_i}"
    }
  else
    config.action_controller.perform_caching = false
    config.cache_store = :null_store
  end

  # Active support configuration settings
  config.active_support.deprecation = :log # Print deprecation notices to the Rails logger.
  config.active_support.disallowed_deprecation = :raise # Raise exceptions for disallowed deprecations.
  config.active_support.disallowed_deprecation_warnings = [] # Specify which deprecation messages to disallow.

  # Active Record configuration settings
  config.active_record.migration_error = :page_load # Raise an error on page load if there are pending migrations.
  config.active_record.verbose_query_logs = true # Highlight code that triggered database queries in logs.

  # Asset configuration settings
  config.assets.quiet = true # Suppress logger output for asset requests.

  # Uncomment if you wish to allow Action Cable access from any origin.
  # config.action_cable.disable_request_forgery_protection = true

  # Uncomment the lines below for additional configuration options
  # config.i18n.raise_on_missing_translations = true  # Raises error for missing translations.
  # config.action_view.annotate_rendered_view_with_filenames = true  # Annotate rendered view with file names.
end
