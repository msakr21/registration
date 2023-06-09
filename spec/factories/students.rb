FactoryBot.define do
  factory :student do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    phone { "+1#{Faker::PhoneNumber.subscriber_number(length: 10)}" }
    language { Faker::Nation.language }
    enrollment
  end
end
