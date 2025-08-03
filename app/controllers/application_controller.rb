class ApplicationController < ActionController::Base
  helper_method :current_user
  around_action :switch_locale

  def authenticate_user!
    redirect_to login_path unless current_user
  end

  def current_user
    begin
      return nil unless session[:admin]

      session[:admin]
    end
  end

  def set_locale
    locale = I18n.locale
    if /en|es|ar|ru/.match?(extract_locale_from_accept_language_header)
      locale = extract_locale_from_accept_language_header
    else
      locale = I18n.locale
    end
    return locale
  end

  def switch_locale(&action)
    logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
    locale = I18n.locale
    if params[:locale]
      locale = params[:locale]
    elsif /en|es|ar|ru/.match?(extract_locale_from_accept_language_header)
      locale = extract_locale_from_accept_language_header
    end
    logger.debug "* Locale set to '#{locale}'"
    I18n.with_locale(locale, &action)
  end

  def default_url_options
    { locale: I18n.locale }
  end

  private

  def extract_locale_from_accept_language_header
    request.env["HTTP_ACCEPT_LANGUAGE"].scan(/^[a-z]{2}/).first
  end
end
