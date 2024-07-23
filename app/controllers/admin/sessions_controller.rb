class Admin::SessionsController < ApplicationController
  def new
  end

  def create
    username = params[:user]
    password = params[:password]
    if username == Rails.application.credentials.user && password == BCrypt::Password.new(Rails.application.credentials.password)
      session[:admin] = 1
      redirect_to admin_enrollments_path
    else
      redirect_to login_path
    end

    def destroy
      session[:admin] = nil

      redirect_to login_path
    end
  end
end