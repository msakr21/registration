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

  <h1 align="center">The Learning Source Enrollment Registration</h3>

  <h3 align="center">
    ESL Portal
    <br />
  </h3>
</div>

<!-- TABLE OF CONTENTS -->
<h4>
  <summary>Table of Contents</summary>
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
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</li>
    <li><a href="#license">License</a></li></a>
  </ol>
</h4>

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

<img src="public/schema.png" alt="Database-Schema" width="90%" height="90%">

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Learning Goals -->
### Learning Goals

* Implement a PostgreSQL database with CRUD functionality and a simple user interface.
* Create instance and class methods on a Rails model that use ActiveRecord methods and helpers.
* Write model and feature tests that fully cover data logic and user behavior.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Triple Crown Reference is a monolithic Rails application that provides simple Create, Read, Update, Delete (CRUD) functionality with a user-friendly interface to navigate between entries. Follow the steps below to get started with running the application on your local machine.

<!-- Repository Installation -->
### Repository Installation

1. Clone the repository: `git clone https://github.com/msakr21/registration`
1. Navigate to the cloned repository's directory: `cd triple_crown`
1. Install gem packages: `bundle install`
1. Setup the database: `rails db:{create,migrate,seed}`
1. Run local RSpec test suite, all tests should be passing: `bundle exec rspec`
1. Start the server: `rails s`
1. Open your web browser and navigate to `localhost:3000`. You should now see the Triple Crown Reference application running locally on your machine.

<!-- Gems Utilized Installation -->
### Gems Utilized

- <b>Capybara</b>: Helps you test web applications by simulating how a real user would interact with your app.
- <b>Launchy</b>: A helper for launching cross-platform applications in a fire and forget manner.
- <b>Orderly</b>: A gem to test the order of items in a list.
- <b>Pry</b>: An IRB alternative and runtime developer console.
- <b>RSpec Rails</b>: Testing framework for Rails 3.x, 4.x, and 5.x.
- <b>Shoulda Matchers</b>: Provides RSpec- and Minitest-compatible one-liners to test common Rails functionality.
- <b>SimpleCov</b>: A code coverage analysis tool for Ruby.
- <b>Pry Rails</b>: Integrates the Pry REPL with Rails.
- <b>RuboCop Rails</b>: Rails-specific static code analysis.
- <b>RuboCop RSpec</b>: Code analyzer for RSpec files.

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