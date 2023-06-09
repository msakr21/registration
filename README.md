# Learning Source Enrollment Registration

<!-- TABLE OF CONTENTS -->
<h3>
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#About">About</a>
        <ul>
          <li><a href="#built-with">Built With</a></li>
          <li><a href="#dependencies">Dependencies</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
            <li><a href="#chrome_driver-installation">Chrome Driver Installation</a></li>
            <li><a href="#repository-installation">Repository Installation</a></li>
            <li><a href="#usage">Usage</a></li>
        </ul>
      </li>
      <li><a href="#roadmap">Roadmap</a></li>
    </ol>
  </details>
</h3>

<!-- About -->
## About

![Product Demo](assets/demo.gif)

The aim of this project is to create an online enrollment registration website for the organization, The Learning Source, to streamline the enrollment process based on needs discussed with staff.

There learning goals for the project are to hook React.js into Rails within a monolith MVC set up where React would handle the rendering of the view files directly without the Rails backend being API endpoints and the React frontend being its separate service that calls upon said endpoints. This allows Rails to handle the routing and maintain a RESTful setup thus allowing for all of the advantages of both frameworks with none of their disadvantages.

RSpec and Capybara are configured to allow feature testing to execute JS code and as such TDD can be applied.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Built With -->
### Built With

<ul>
    <li> Ruby 3.1.1 </li>
    <li> Ruby on Rails 7.0.4</li>
    <li> Vite </li>
    <li> React.js </li>
    <li> PostgreSQL </li>
</ul>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Dependencies -->
### Dependencies

The following Rails gems are used:

1) Vite_rails to hook React and JS into Rails
2) RSpec-rails as the testing library
3) Capybara for webpage assertions/feature testing
4) Should-matchers for more assertions
5) Pry for Rails debugging
6) Simplecov for test coverage
7) Selenium-webdriver to allow RSpec and Capybara to execute JS with a chrome webdriver
8) Rubocop as a linter

The following Javascript libraries are used:
1) Vite (controlled by Vite_Rails above)
2) Vite-ruby (controlled by Vite_Rails above)
3) React.js for it's frontend scripting
4) MUI X libraries for various Datetime pickers

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Getting Started -->
## Getting Started

<!-- Installation -->
### Chrome Driver Installation
<details>
<summary> Click to expand/collapse </summary>

Chrome Driver is needed for the selenium webdriver gem to function allowing RSpec and Capybara to run the JS correctly and test the webpage contents.

### macOS:
1) run `brew install --cask chromedriver`

2) run `chromeDriver -v` to confirm installation

Optional, if quarantined by macOS:

3) run `which chromedriver` to find out installation path

   output should look similar to: `/usr/local/bin/chromedriver`

4) run `xattr -d com.apple.quarantine /usr/local/bin/chromedriver`

5) confirm that it works no by repeating step 2

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<!-- Repository Installation -->
### Repository Installation
* fork and clone repo
* run `bundle install` in the console/terminal
* run `bundle exec vite install` in the console/terminal
* run `npm install` in the console/terminal

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Usage -->
### Usage

1) To use the repo, instructions to be added

2) To run the tests, run `bundle exec rspec`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

MVP
* [x] Determine Viability of passing data between controller and React components in a monolith, MVC, RESTful architecture utilizing Vite
* [x] Determine viability of TDD using RSpec and Capybara for webpages utilizing JS
* [x] Decide whether to carry out project in regular Rails monolith or with a React + Rails setup utilizing Vite
* [ ] Admin and Prospective Student flow experiences
* [x] Ability to create new enrollments
* [ ] Make the creation of new enrollments restricted to admins only
* [x] Prospective Students' ability to see list of enrollment sessions (enrollments index page)
* [ ] Admin's ability to see list of enrollment sessions (admin enrollments index page)
* [ ] Admin's ability to see details of a given enrollment session (admin enrollments show pages)
* [ ] Admin's ability to edit details of a given enrollment session
* [ ] Admin's ability to add and/or remove students to a given enrollment session
* [ ] Prospective Students' ability to select an enrollment session to join from the list of available sessions
* [ ] Cap each session's number of students according to limit set (default of 30) after which prospective students would not have the option to select it to join.
* [ ] Deploy on render
* [ ] Detailed README file 

Stretch Goals
TBD

<p align="right">(<a href="#top">back to top</a>)</p>
