module ApplicationHelper
  def mobile_device?
    if request.user_agent =~ /Mobile|webOS/
      true
    else
      false
    end
  end
end