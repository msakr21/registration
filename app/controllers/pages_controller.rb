class PagesController < ApplicationController
  def home
    @locale = params[:locale] || set_locale
    @error_adding = params[:error_adding]
  end
  def confirmation
    @locale = params[:locale] || set_locale
    @name = params[:name]
    @time = params[:time]
    @date = params[:date]
    @location = params[:location]
  end

  def duplicate
    @locale = params[:locale] || set_locale
    @name = params[:name]
    @time = params[:time]
    @date = params[:date]
    @location = params[:location]
  end
end
