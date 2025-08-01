class PagesController < ApplicationController
  def home
    @locale = params[:locale] || set_locale
  end
  def confirmation
    @locale = params[:locale] || set_locale
    @name = params[:name]
    @time = params[:time]
    @location = params[:location]
  end
end
