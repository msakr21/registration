[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

# The Learning Source Enrollment Registration

## ESL Registration Portal Documentation

<!-- TABLE OF CONTENTS -->
## Table of Contents

1. [About The Project](#about-the-project)
   - [Deployment Information](#deployment-information)
   - [Built With](#built-with)
   - [Database Schema](#database-schema)
   - [Learning Goals](#learning-goals)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Usage](#usage)
     - [Repository Usage](#to-use-the-repository)
     - [Running Tests](#to-run-tests)
   - [Gems Utilized](#gems-utilized)
   - [JavaScript Packages Utilized](#javascript-packages-utilized)
3. [Roadmap](#roadmap)
   - [Initial Research and Decisions](#initial-research-and-decisions)
   - [Enrollment Management](#enrollment-managment)
   - [Prospective Student Features](#prospective-student-features)
   - [Admin Features](#admin-features)
   - [Database Enhancements](#database-enhancements)
   - [Deployment and Documentation](#deployment-and-documentation)
   - [Stretch Goals](#stretch-goals)
4. [Contact](#contact)
5. [Acknowledgments](#acknowledgments)
6. [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project

This project aims to create an online enrollment registration website for [The Learning Source (TLS)](https://www.thelearningsource.org/), an organization committed to empowering immigrant and refugee students through education. The primary goal is to streamline the enrollment process for prospective students, based on staff insights and feedback.

Our web application harnesses React for frontend and Ruby on Rails for backend within a unique monolithic setup. We leverage HTML5, CSS3, JavaScript, Ruby, and PostgreSQL alongside Vite.js for a streamlined development experience. The design workflow is managed through GitHub Issues and documented using Google Docs.

To ensure high quality, we employ a Test-Driven Development (TDD) approach using RSpec for unit tests; and Capybara, Selenium, and ChromeDriver for feature testing and cross-browser compatibility checks.

For our DevOps processes, we use Render and GitHub to maintain a smooth and reliable release pipeline. This project is an opportunity for us to explore the combination of Rails and React.js, enhance our understanding of TDD, and optimize our DevOps practices.

<div align="right">

[(back to top)](#top)

</div>

<!-- Deployment Information -->
### Deployment Information

The Learning Source Enrollment Registration is deployed on Render. Please see the link below.

[Render Deployment](https://registration-test.onrender.com/)

<div align="right">

[(back to top)](#top)

</div>

<!-- Built With -->
### Built With

![Tech-Stack](public/tech-stack.png)

<div align="right">

[(back to top)](#top)

</div>

<!-- Database Schema -->
### Database Schema

![Database-Schema](public/schema.png)

<div align="right">

[(back to top)](#top)

</div>

<!-- Learning Goals -->
### Learning Goals

*Instructions to be added*

<div align="right">

[(back to top)](#top)

</div>

<!-- GETTING STARTED -->
## Getting Started

This section provides a step-by-step guide on how to install and run this project on your local machine.

<!-- PREREQUISITES -->
### Prerequisites

For tests to be run correctly then make sure you have installed [Chrome Driver](https://sites.google.com/a/chromium.org/chromedriver/) before you begin. This is needed for the selenium webdriver gem to function, allowing RSpec and Capybara to run JavaScript correctly and test the webpage contents.

For macOS users:

1. Install Chrome Driver using Homebrew: `brew install --cask chromedriver`.
2. Confirm installation by running `chromedriver -v`.

> **Note:** In case Chrome Driver is quarantined by macOS:
>
> 1. Run `which chromedriver` to find the installation path. The output should look similar to `/usr/local/bin/chromedriver`.
> 2. Run `xattr -d com.apple.quarantine /usr/local/bin/chromedriver`.
> 3. Confirm it's working by repeating step 2 above.

<div align="right">

[(back to top)](#top)

</div>

<!-- INSTALLATION -->
### Installation

Follow the steps below to install and set up the repository on your local machine:

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Open your console or terminal and navigate to the project directory.
4. Run `bundle install` to install the required Ruby gems.
5. Execute `bundle exec vite install` to set up Vite.
6. Run `npm install` to install the necessary npm packages.

<div align="right">

[(back to top)](#top)

</div>

<!-- USAGE -->
### Usage

*Instructions to be added*

<div align="right">

[(back to top)](#top)

</div>

<!-- TO USE THE REPOSITORY -->
#### To use the repository

*Instructions to be added*

<div align="right">

[(back to top)](#top)

</div>

<!-- TO RUN TESTS -->
#### To run tests

You will need two terminal windows (or tabs):

1. **Terminal 1:** Navigate to the project directory and start the Vite server with `npm run dev`. This command starts the Vite server, which the tests will interact with. Ensure that the Vite server is always running in the background while executing the tests.

2. **Terminal 2:** Navigate to the project directory and run `bundle exec rspec` to run the entire RSpec test suite. The test results will be output in this terminal window.

<div align="right">

[(back to top)](#top)

</div>

<!-- Gems Utilized -->
### Gems Utilized

The Learning Source Enrollment Registration utilizes the following gems:

- [Ruby 3.1.1](https://www.ruby-lang.org/)
- [Rails 7.0.4](https://rubyonrails.org/) - Our web application framework.
- [sprockets-rails](https://github.com/rails/sprockets-rails) - Rails asset pipeline.
- [pg](https://rubygems.org/gems/pg/versions/0.18.4) - PostgreSQL database adapter.
- [puma](https://github.com/puma/puma) - A Ruby/Rack web server built for concurrency.
- [vite_rails](https://github.com/rails/vite_rails) - Integrates Vite with Rails.
- [tzinfo-data](https://github.com/tzinfo/tzinfo-data) - Provides daylight savings time (DST) data.
- [phonelib](https://github.com/daddyz/phonelib) - A library to validate phone numbers.
- [capybara](https://github.com/teamcapybara/capybara) - Helps you test web applications by simulating how a real user would interact with your app.
- [debug](https://github.com/ruby/debug) - A new Ruby debugging library (only for MRI and mingw platforms).
- [factory_bot_rails](https://github.com/thoughtbot/factory_bot_rails) - A fixtures replacement for focused and readable tests.
- [faker](https://github.com/faker-ruby/faker) - A library for generating fake data.
- [pry](https://github.com/pry/pry) - A runtime developer console and IRB alternative.
- [rspec-rails](https://github.com/rspec/rspec-rails) - Testing framework for Rails.
- [selenium-webdriver](https://www.selenium.dev/projects/webdriver/) - Tool for writing automated tests of websites.
- [shoulda-matchers](https://github.com/thoughtbot/shoulda-matchers) - Provides RSpec- and Minitest-compatible one-liners to test common Rails functionality.
- [rubocop-rails](https://github.com/rubocop/rubocop-rails) - Rails-specific static code analysis.
- [rubocop-rspec](https://github.com/rubocop/rubocop-rspec) - Code analyzer for RSpec files.
- [simplecov](https://github.com/simplecov-ruby/simplecov) - Code coverage analysis tool for Ruby.

<div align="right">

[(back to top)](#top)

</div>

<!-- JavaScript Packages Utilized -->
### JavaScript Packages Utilized

The Learning Source Enrollment Registration utilizes the following JavaScript packages:

- [vite](https://vitejs.dev/): A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [vite-plugin-ruby](https://github.com/ElMassimo/vite_ruby): A Vite.js plugin for better integration with Ruby on Rails.
- [@date-io/date-fns](https://github.com/dmtrKovalenko/date-io): A package to use date-fns with date-io.
- [@emotion/react](https://emotion.sh/docs/@emotion/react): A library for writing css styles with JavaScript.
- [@emotion/styled](https://emotion.sh/docs/@emotion/styled): A library for creating React components with style.
- [@fortawesome/fontawesome-svg-core](https://github.com/FortAwesome/Font-Awesome): The SVG core of Font Awesome.
- [@fortawesome/free-regular-svg-icons](https://github.com/FortAwesome/Font-Awesome): Regular style SVG icons from Font Awesome.
- [@fortawesome/free-solid-svg-icons](https://github.com/FortAwesome/Font-Awesome): Solid style SVG icons from Font Awesome.
- [@fortawesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome): Font Awesome React component.
- [@mui/base](https://mui.com/): The foundation of the MUI ecosystem, used by all MUI components.
- [@mui/lab](https://mui.com/components/about-the-lab/): MUI components that are in active development.
- [@mui/material](https://mui.com/): React components for faster and easier web development by MUI.
- [@mui/system](https://mui.com/system/basics/): Low-level utility functions called "style functions" for building powerful design systems by MUI.
- [@mui/x-date-pickers](https://mui.com/components/date-picker/): Date Picker component by MUI.
- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react): Official Vite plugin for React.
- [bootstrap](https://getbootstrap.com/): The most popular HTML, CSS, and JS library in the world for building responsive, mobile-first projects on the web.
- [date-fns](https://date-fns.org/): Modern JavaScript date utility library.
- [mdb-react-ui-kit](https://mdbootstrap.com/docs/b5/react/): UI Kit based on Bootstrap 5 for React by MDBootstrap.
- [react](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-bootstrap](https://react-bootstrap.github.io/): The most popular front-end framework, rebuilt for React.
- [react-bootstrap-icons](https://react-bootstrap-icons.netlify.app/): Bootstrap icons, but for React.
- [react-datetime-picker](https://www.npmjs.com/package/react-datetime-picker): A date/time picker for react (using bootstrap).
- [react-dom](https://reactjs.org/docs/react-dom.html): Serves as the entry point to the DOM and server renderers for React.

<div align="right">

[(back to top)](#top)

</div>

<!-- ROADMAP -->
## Roadmap

The following is a roadmap for our project, outlining our Minimum Viable Product (MVP) and the key steps towards achieving it:

<!-- INITIAL RESEARCH AND DECISIONS -->
### Initial Research and Decisions

- [x] Evaluate the feasibility of passing data between controller and React components in a monolithic MVC, RESTful architecture using Vite.
- [x] Assess the potential for Test-Driven Development (TDD) using RSpec and Capybara for webpages that utilize JavaScript.
- [x] Decide on project structure: whether to utilize a standard Rails monolith or a React + Rails setup with Vite.

<!-- ENROLLMENT MANAGEMENT -->
### Enrollment Management

- [x] Develop the ability to create new enrollment sessions.
- [x] Restrict the creation of new enrollment sessions to admins only.

<!-- PROSPECTIVE STUDENT FEATURES -->
### Prospective Student Features

- [x] Enable prospective students to view a list of enrollment sessions.
- [x] Allow prospective students to select an enrollment session to join from the list of available sessions.
- [x] Implement a cap on each session's student count (default of 30), after which prospective students won't have the option to join.
- [ ] Upon successful joining of a session, redirect students to a confirmation page displaying registration details and staff contact information.

<!-- ADMIN FEATURES -->
### Admin Features

- [x] Enable admins to view a list of enrollment sessions.
- [x] Develop the capability for admins to view the details of specific enrollment sessions.
- [x] Create editable and deletable buttons for admins to manage students within a specific enrollment session.
- [x] Build the ability for admins to modify details of a specific enrollment session.
- [x] Enable admins to add and/or remove students from a specific enrollment session.
- [ ] Admin login authentication
- [ ] Admin authorization within admin workflow

<!-- DATABASE ENHANCEMENTS -->
### Database Enhancements

- [x] Add "language spoken" field to the student database schema.

<!-- DEPLOYMENT AND DOCUMENTATION -->
### Deployment and Documentation

- [x] Deploy the application on Render.
- [ ] Create a detailed README file.

<!-- STRETCH GOALS -->
### Stretch Goals

- [ ] Add a language toggle for the student enrollment user experience to support Spanish, Arabic and Russian.
- [ ] Add accessibility/Alt descriptive text to page elements

Please refer to the [open issues](https://github.com/msakr21/registration/issues) for a full list of proposed features and known issues.

<div align="right">

[(back to top)](#top)

</div>

<!-- CONTACT -->
## Contact

<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/110377741?s=150&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/101418582?s=150&v=4"></td>
  </tr>
  <tr>
    <td>Mostafa Sakr</td>
    <td>Bryan Keener</td>
  </tr>
  <tr>
    <td>
      <img src="public/github-logo.png" alt="github"> <a href="https://github.com/msakr21">GitHub</a><br>
      <img src="public/linkedin-logo.png" alt="linkedin"> <a href="https://linkedin.com/in/mostafasakr16/">LinkedIn</a>
    </td>
    <td>
      <img src="public/github-logo.png" alt="github"> <a href="https://github.com/bkeener7">GitHub</a><br>
      <img src="public/linkedin-logo.png" alt="linkedin"> <a href="https://www.linkedin.com/in/bkeener/">LinkedIn</a>
    </td>
  </tr>
</table>

<div align="right">

[(back to top)](#top)

</div>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

[The Learning Source](https://www.thelearningsource.org/)

<div align="right">

[(back to top)](#top)

</div>

<!-- LICENSE -->
## License

This project is licensed under the terms of the MIT license. For more details, see the [LICENSE](./LICENSE) file.

<div align="right">

[(back to top)](#top)

</div>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/msakr21/registration.svg?style=for-the-badge
[contributors-url]: https://github.com/msakr21/registration/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/msakr21/registration.svg?style=for-the-badge
[forks-url]: https://github.com/msakr21/registration/network/members
[stars-shield]: https://img.shields.io/github/stars/msakr21/registration.svg?style=for-the-badge
[stars-url]: https://github.com/msakr21/registration/stargazers
[issues-shield]: https://img.shields.io/github/issues/msakr21/registration.svg?style=for-the-badge
[issues-url]: https://github.com/msakr21/registration/issues
[license-shield]: https://img.shields.io/github/license/msakr21/registration.svg?style=for-the-badge
[license-url]: https://github.com/msakr21/registration/blob/main/LICENSE
