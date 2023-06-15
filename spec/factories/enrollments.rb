FactoryBot.define do
  factory :enrollment do
    location { Faker::Address.city }
    schedule { Faker::Date.forward(days: 3000) }
    student_limit { 30 }
  end
end
