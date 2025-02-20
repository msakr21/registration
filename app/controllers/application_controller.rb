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

  def switch_locale(&action)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  def default_url_options
    { locale: I18n.locale }
  end
end
