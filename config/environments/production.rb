require 'active_support/core_ext/integer/time'

Rails.application.configure do
  # Settings specified here will take precedence over those in config/application.rb.

  # General application settings
  config.cache_classes = true # Code is not reloaded between requests.
  config.eager_load = true # Eager load code on boot for better performance.
  config.consider_all_requests_local = false # Full error reports are disabled.

  # Caching settings
  config.action_controller.perform_caching = true # Enable caching.
  # config.cache_store = :mem_cache_store  # Uncomment to use a different cache store in production.

  # Security settings
  # config.require_master_key = true  # Uncomment if master key is needed to decrypt credentials.
  # config.force_ssl = true  # Uncomment to force all access to the app over SSL.

  # File serving settings
  config.public_file_server.enabled = ENV['RAILS_SERVE_STATIC_FILES'].present? # Disable serving static files by default.
  # config.action_dispatch.x_sendfile_header = "X-Sendfile" # Uncomment for Apache.
  # config.action_dispatch.x_sendfile_header = "X-Accel-Redirect" # Uncomment for NGINX.

  # Assets settings
  config.assets.compile = false # Do not fallback to assets pipeline if a precompiled asset is missed.
  # config.assets.css_compressor = :sass  # Uncomment to compress CSS using a preprocessor.
  # config.asset_host = "http://assets.example.com"  # Uncomment to enable serving of assets from an asset server.

  # Logging settings
  config.log_level = :info # Log general and useful information about system operation.
  config.log_tags = [:request_id] # Prepend all log lines with the following tags.
  config.log_formatter = Logger::Formatter.new # Use default logging formatter.
  # config.logger = ActiveSupport::TaggedLogging.new(Syslog::Logger.new "app-name")  # Uncomment to use a different logger for distributed setups.

  # STDOUT logging
  if ENV['RAILS_LOG_TO_STDOUT'].present?
    logger           = ActiveSupport::Logger.new($stdout)
    logger.formatter = config.log_formatter
    config.logger    = ActiveSupport::TaggedLogging.new(logger)
  end

  # I18n settings
  config.i18n.fallbacks = true # Enable locale fallbacks for I18n.

  # Active Support settings
  config.active_support.report_deprecations = false # Don't log any deprecations.

  # Active Record settings
  config.active_record.dump_schema_after_migration = false  # Do not dump schema after migrations.
end
