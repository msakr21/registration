FactoryBot.define do
  factory :enrollment do
    location { ['Eloise May', 'Smoky Hill', 'Sheridan'].sample }
    schedule { Faker::Date.forward(days: 3000) }
    student_limit { 30 }
  end
end
