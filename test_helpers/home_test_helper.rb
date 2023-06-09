# class HomeTestHelper < BaseTestHelper
#   INDEX_PATH = 'app/frontend/components/test.jsx'

# # Aliases: Semantic aliases for locators, can be used in most DSL methods.
#   aliases(
#     el: 'body',
#   )

# # Finders: A convenient way to get related data or nested elements.

# # Actions: Encapsulate complex actions to provide a cleaner interface.
#   # Public: Allows to test HMR in the test environment.
#   def rewrite(text, to:)
#     new_content = File.read(INDEX_PATH).sub(text, to)
#     File.open(INDEX_PATH, 'w') { |file| file.write(new_content) }
#   end

#   def revert_changes
#     `git checkout #{ Index_PATH }`
#   end

# # Assertions: Check on element properties, used with `should` and `should_not`.

# # Background: Helpers to add/modify/delete data in the database or session.
# end
