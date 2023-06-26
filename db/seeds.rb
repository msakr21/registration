require 'factory_bot_rails'
include FactoryBot::Syntax::Methods

enrollment = create(:enrollment)
create_list(:student, 30, enrollment:)
