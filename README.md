[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/msakr21/registration">
    <img src="public/TLS-Logo.png" alt="Logo">
  </a>

  <h1 align="center">The Learning Source Enrollment Registration</h1>

  <h3 align="center">
    ESL Portal
    <br />
  </h3>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary><h2>Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#deployment-information">Deployment Information</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#database-schema">Database Schema</a></li>
        <li><a href="#learning-goals">Learning Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#repository-installation">Repository Installation</a></li>
        <li><a href="#gems-utilized">Gems Utilized</a></li>
        <li><a href="#javascript-packages-utilized">JavaScript Packages Utilized</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project aims to create an online enrollment registration website for The Learning Source (TLS), an organization committed to empowering students through education. The primary goal is to streamline the enrollment process for prospective students, based on staff insights and feedback.

Our web application harnesses React for frontend and Ruby on Rails for backend within a unique monolithic setup. We leverage HTML5, CSS3, JavaScript, Ruby, and PostgreSQL alongside Vite.js for a streamlined development experience. The design workflow is managed through GitHub Issues and documented using Google Docs.

To ensure high quality, we employ a Test-Driven Development (TDD) approach using RSpec for unit tests, and Capybara, Selenium, and ChromeDriver for feature testing and cross-browser compatibility checks.

For our DevOps processes, we use Render and GitHub to maintain a smooth and reliable release pipeline. This project is an opportunity for us to explore the combination of Rails and React.js, enhance our understanding of TDD, and optimize our DevOps practices.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Deployment Information -->
### Deployment Information

The Learning Source Enrollment Registration will be deployed soon 🤗

* ~~Render Deployment~~<br>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Built With -->
### Built With

<img src="public/tech-stack.png" alt="Tech-Stack" width="90%" height="90%">

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Database Schema -->
### Database Schema

<img src="public/schema.png" alt="Database-Schema">

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Learning Goals -->
### Learning Goals

* Implement a PostgreSQL database with CRUD functionality and a simple user interface.
* Create instance and class methods on a Rails model that use ActiveRecord methods and helpers.
* Write model and feature tests that fully cover data logic and user behavior.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This section provides a step-by-step guide on how to install and run this project on your local machine.

### Prerequisites

Before you begin, make sure you have installed [Chrome Driver](https://sites.google.com/a/chromium.org/chromedriver/). This is needed for the selenium webdriver gem to function, allowing RSpec and Capybara to run JavaScript correctly and test the webpage contents.

For macOS users:

1. Install Chrome Driver using Homebrew: `brew install --cask chromedriver`.
2. Confirm installation by running `chromedriver -v`.

> **Note:** In case Chrome Driver is quarantined by macOS:
> 1. Run `which chromedriver` to find the installation path. The output should look similar to `/usr/local/bin/chromedriver`.
> 2. Run `xattr -d com.apple.quarantine /usr/local/bin/chromedriver`.
> 3. Confirm it's working by repeating step 2 above.

### Installation

1. Fork and clone the repository.
2. In your console or terminal, navigate to the project directory and run `bundle install`.
3. Run `bundle exec vite install`.
4. Run `npm install`.

### Usage

#### To use the repository

*Instructions to be added*

#### To run tests

You will need two terminal windows (or tabs):

1. **Terminal 1:** Navigate to the project directory and start the Vite server with `npm run dev`. This command starts the Vite server, which the tests will interact with. Ensure that the Vite server is always running in the background while executing the tests.

2. **Terminal 2:** Navigate to the project directory and run `bundle exec rspec` to run the entire RSpec test suite. The test results will be output in this terminal window.

<!-- Repository Installation -->
### Repository Installation

1. Clone the repository: `git clone https://github.com/msakr21/registration`
1. Navigate to the cloned repository's directory: `cd triple_crown`
1. Install gem packages: `bundle install`
1. Setup the database: `rails db:{create,migrate,seed}`
1. Run local RSpec test suite, all tests should be passing: `bundle exec rspec`
1. Start the server: `rails s`
1. Open your web browser and navigate to `localhost:3000`. You should now see the Triple Crown Reference application running locally on your machine.

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

<p align="right">(<a href="#top">back to top</a>)</p>

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

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

MVP

* Design a one-to-many relationship using a schema designer.
* Write migrations to create tables with columns of varying data types and foreign keys.
* Use Rails to create web pages that allow users to CRUD resources.
* Create instance and class methods on a Rails model that use ActiveRecord methods and helpers.
* Write model and feature tests that fully cover data logic and user behavior.

Stretch Goals

* Implement more winners and individual statistics.
* Continue building out full user interface.

See the [open issues](https://github.com/msakr21/registration/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

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

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

[The Learning Source](https://www.thelearningsource.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

This project is licensed under the terms of the MIT license. For more details, see the [LICENSE](./LICENSE) file.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/msakr21/registration.svg?style=for-the-badge
[contributors-url]: https://github.com/msakr21/registration/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/msakr21/registration.svg?style=for-the-badge
[forks-url]: https://github.com/msakr21/registration/network/members
[stars-shield]: https://img.shields.io/github/stars/msakr21/registration.svg?style=for-the-badge
[stars-url]: https://github.com/msakr21/registration/stargazers
[issues-shield]: https://img.shields.io/github/issues/msakr21/registration.svg?style=for-the-badge
[issues-url]: https://github.com/msakr21/registration/issues
[license-shield]: https://img.shields.io/github/license/msakr21/registration.svg?style=for-the-badge
[license-url]: https://github.com/msakr21/registration/blob/master/LICENSE.txt