class ApplicationController < ActionController::Base
  helper_method :current_user

  def authenticate_user!
    redirect_to login_path unless current_user
  end

  def current_user
    begin
      return nil unless session[:admin]

      session[:admin]
    end
  end
end
