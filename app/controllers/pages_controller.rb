class PagesController < ApplicationController
  def home; end

  def confirmation
    @name = params[:name]
    @time = params[:time]
    @date = params[:date]
    @location = params[:location]
  end
end
