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
            <li><a href="#ruby-installation">Ruby Installation</a></li>
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

To run this program you must first have Ruby installed on your device. There are installation instructions included based on my experience (limited as it may be) and preference. If you have installation managers that you prefer, feel free to use them instead.



<!-- Ruby Installation -->
### Ruby Installation
<details>
<summary> Click to expand/collapse </summary>

### macOS:
1) Install homebrew if you have not already done so by running `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` in terminal. It will take some time. To confirm it's been installed correctly after it's done, press command + q on your keyboard. Start a new terminal session and type `brew doctor`, you should get `Your system is ready to brew.` as an output.

2) Install rbenv by running `brew install rbenv` in terminal. Once that is complete, run `rbenv init`; you should get an output that looks similar to: 
```
  # Load rbenv automatically by appending
  # the following to ~/.zshrc
  .
  eval "$(rbenv init -)"
```

3) Update your zshrc file with the eval line from the above output. If unsure how to open your zshrc file, use your code editor's shell command (the following example uses VScode and "code" refers to it) in the terminal: `code ~/.zshrc`. If the zshrc file does not exist, you can run ` touch ~/.zshrc` followed by the previous command to open it and paste the eval line in. Make sure to save the file then close using command + q. To confirm this step has been done correctly, start terminal again and type `rbenv versions`. If there are no error messages, you're good to go.

4) Use rbenv to install and/or change Ruby versions as needed. This program is built using Ruby 2.7.4, so we'll either install or switch to that version. If you don't see 2.7.4 listed when you run `rbenv versions`, then run `rbenv install 2.7.4` in terminal. Once done, you should see it listed after running `rbenv versions` (highly recommend command + q before checking). If you see it listed, then once you fork and clone the repo make sure to run `rbenv local 2.7.4` in the program's directory. You could also run `rbenv global 2.7.4` followed by `rbenv rehash` but that would change the globally used version to 2.7.4 rather than just the program's directory's.


### Windows:

<img src="https://media.tenor.com/niBYLqVc8Y0AAAAd/pepe-crying.gif" width="120" height="120">

Neither brew nor rbenv are supported by Windows, so you can either install a single version of Ruby to use (in this case 2.7.4) or you could use uru as an alternative Ruby Version/Environment Manager. The first step will be for Ruby 2.7.4 installation. The rest will cover uru set up and usage.

0- I recommend creating a tools folder where you'll be installing this (typically on the same drive as where you have Windows)

1- Head over to https://rubyinstaller.org/downloads/archives/ and find "Ruby+Devkit 2.7.4-1" (I'm not entirely sure if the devkit one is necessary compared to the regular Ruby, but that was what I tried and got to work). Download, and follow the set up instructions (may need to run exe as admin). You should have an option to put it on system path, make sure to have that unselected.
  
2- If you have another version of Ruby or if you'd like to add other versions for future or past use, visit: https://bitbucket.org/jonforums/uru/wiki/Downloads and download the windows version in your tools folder
  
3- Unzip the folder contents into your tools folder then run `uru_rt admin install` in command prompt in that directory. This is for reference: https://bitbucket.org/jonforums/uru/wiki/Usage, make sure to not set a system Ruby as that can cause issues and expected unexpected behaviour. I did not make a mistake with the description of the behaviour.

4- As per https://bitbucket.org/jonforums/uru/wiki/Examples, run `uru ls` in order to see a list of Ruby versions. You can register/add a Ruby version installation (as per step 1) to uru by running `uru admin add your_installation_path\bin`. Mine command for example was: `uru admin add C:\tools\Ruby27-x64\bin`. Run ls to confirm 2.7.4 has been added successfully. To switch you would just run `uru` followed by whatever Ruby 2.7.4 is listed as. Mine for example was: `uru 274p191`. And you should be all set.

<p align="right">(<a href="#top">back to top</a>)</p>
</details>

<!-- Repository Installation -->
### Repository Installation
* fork and clone repo
* run`bundle install` in the console/terminal

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Usage -->
### Usage

1) To run the program, just type the following code: `ruby count_clicks_runner.rb` in the console/terminal.

You'll see the output shown below:
```
[
  {
    "https://youtube.com/": 557
  },
  {
    "https://twitter.com/": 512
  },
  {
    "https://reddit.com/": 510
  },
  {
    "https://github.com/": 497
  },
  {
    "https://linkedin.com/": 496
  },
  {
    "https://google.com/": 492
  }
]
```

2) If you'd like to count clicks for other years, use a different csv file, or use a different json file; then in the count_clicks_runner.rb replace the following arguments: `("2021", './data/decodes.json', './data/encodes.csv')` as needed.

 
3) To run the tests, run `bundle exec rspec`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

MVP
* [x] Count clicks for the year 2021
* [x] Sort count in descending order
* [x] Output JSON array of hashes/objects in console
* [x] Unit tests for each method/function (employed TDD)
* [x] Detailed README file 

Stretch Goals
* [x] Write the code to count clicks based on year input and file path provided
* [x] Set Ruby up on Windows device to include installation instructions as well as test cloning and running on a different OS


<p align="right">(<a href="#top">back to top</a>)</p>
